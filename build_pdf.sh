#!/bin/bash
set -e
cd "$(dirname "$0")"

python3 - <<'PY'
import os, re

ROOT = '.'
SECTION_ORDER = [
    ('01-introduction', 'Introduction'),
    ('02-product-development', 'Product Development'),
    ('03-delivery-team-methodology', 'Delivery Team Methodology'),
    ('04-modern-engineering-practices', 'Modern Engineering Practices'),
    ('05-governance', 'Governance'),
    ('07-resources', 'Resources'),
]

def extract_h1_title(text):
    m = re.search(r'^# ([^\n]+)$', text, flags=re.M)
    return m.group(1).strip() if m else None

def clean_title(title):
    return re.sub(r'^\d+(\.\d+)*\s*-?\s*', '', title).strip()

def slug_for_id(text):
    s = text.lower()
    s = re.sub(r'[^a-z0-9\s-]', '', s)
    s = re.sub(r'\s+', '-', s).strip('-')
    return s

def list_md_in_section(section_dir):
    top, sub = [], []
    for entry in sorted(os.listdir(section_dir)):
        full = os.path.join(section_dir, entry)
        if entry.startswith('.') or entry == 'img':
            continue
        if os.path.isfile(full) and entry.lower().endswith('.md'):
            top.append(full)
        elif os.path.isdir(full):
            for f in sorted(os.listdir(full)):
                if f.lower().endswith('.md'):
                    sub.append(os.path.join(full, f))
    return top, sub

def strip_first_h1(text):
    lines = text.split('\n')
    for i, ln in enumerate(lines):
        if ln.strip() == '':
            continue
        if re.match(r'^# [^#]', ln):
            del lines[i]
            if i < len(lines) and lines[i].strip() == '':
                del lines[i]
            break
        else:
            break
    return '\n'.join(lines)

def demote_headings(text, levels=1):
    def repl(m):
        return '#' * min(6, len(m.group(1)) + levels) + m.group(2)
    return re.sub(r'^(#{1,6})( .*)$', repl, text, flags=re.M)

def rewrite_image_paths(text, file_dir, target_root):
    def repl(m):
        prefix, url, suffix = m.group(1), m.group(2), m.group(3)
        if url.startswith(('http://','https://','data:','#')):
            return m.group(0)
        fragment = ''
        for sep in ('#','?'):
            if sep in url:
                idx = url.index(sep); fragment = url[idx:] + fragment; url = url[:idx]; break
        new_rel = os.path.relpath(os.path.normpath(os.path.join(file_dir, url)), target_root).replace(os.sep, '/')
        return f"{prefix}{new_rel}{fragment}{suffix}"
    return re.sub(r'(!\[[^\]]*\]\()([^)]+)(\))', repl, text)

def strip_md_links_to_files(text):
    def repl(m):
        label, url = m.group(1), m.group(2)
        if url.startswith(('http://','https://','mailto:','data:','#')):
            return m.group(0)
        if re.split(r'[?#]', url, 1)[0].lower().endswith('.md'):
            if label.startswith('**') and label.endswith('**'):
                return label
            return f"**{label}**"
        return m.group(0)
    return re.sub(r'(?<!\!)\[([^\]]+)\]\(([^)]+)\)', repl, text)

section_files = []
for section_dir, section_title in SECTION_ORDER:
    if not os.path.isdir(section_dir): continue
    top, sub = list_md_in_section(section_dir)
    section_files.append((section_title, top + sub))

out = []
out.append('<div class="cover">')
out.append('  <h1 class="cover-title">The AK Way</h1>')
out.append("  <p class=\"cover-subtitle\">Armakuni's principles, values, and standards for software delivery</p>")
out.append('</div>')
out.append('')

used_ids = set()
def unique_id(base):
    cand, n = base, 2
    while cand in used_ids:
        cand = f"{base}-{n}"; n += 1
    used_ids.add(cand); return cand

toc_entries = []; file_anchors = {}; section_anchors = {}
for section_title, files_in_order in section_files:
    sa = unique_id(slug_for_id(section_title))
    section_anchors[section_title] = sa
    toc_entries.append((1, section_title, sa))
    for fp in files_in_order:
        with open(fp, encoding='utf-8') as fh: text = fh.read()
        title = clean_title(extract_h1_title(text) or os.path.splitext(os.path.basename(fp))[0])
        a = unique_id(slug_for_id(title))
        file_anchors[fp] = a
        toc_entries.append((2, title, a))

out.append('<section class="toc-page">')
out.append('<h1 class="toc-title">Table of Contents</h1>')
out.append('<nav class="toc"><ul>')
in_section = False
for level, title, anchor in toc_entries:
    if level == 1:
        if in_section: out.append('  </ul></li>')
        out.append(f'  <li class="toc-section"><a href="#{anchor}">{title}</a><ul>')
        in_section = True
    else:
        out.append(f'    <li class="toc-item"><a href="#{anchor}">{title}</a></li>')
if in_section: out.append('  </ul></li>')
out.append('</ul></nav></section>')
out.append('')

for section_title, files_in_order in section_files:
    out.append(f'<h1 id="{section_anchors[section_title]}" class="section-title">{section_title}</h1>')
    out.append('')
    for fp in files_in_order:
        with open(fp, encoding='utf-8') as fh: text = fh.read()
        title = clean_title(extract_h1_title(text) or os.path.splitext(os.path.basename(fp))[0])
        text = strip_first_h1(text)
        text = rewrite_image_paths(text, os.path.dirname(fp), ROOT)
        text = strip_md_links_to_files(text)
        text = demote_headings(text, 1)
        out.append(f'<h2 id="{file_anchors[fp]}" class="doc-title">{title}</h2>')
        out.append('')
        out.append(text); out.append('')

with open('combined.md', 'w', encoding='utf-8') as fh:
    fh.write('\n'.join(out))
print(f"combined.md written")
PY

pandoc combined.md -o combined.html -s --metadata title="The AK Way" --css=pdf-style.css
npx --yes pagedjs-cli combined.html -o combined.pdf
