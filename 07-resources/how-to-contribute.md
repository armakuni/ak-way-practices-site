# How to contribute

# 1. Create the card

Add the article as a card in the **AK Way** collection in Guru. Place it in the correct folder.

# 2. Publish it

Once published, it will automatically appear on The AK Way site via Guru WebHooks and GitHub Actions.

# Things to note

## Navigation

### Order by number in title

The number at the start of the title controls its position in the navigation. Drag-and-drop order in Guru is ignored.

```
01 - First Article 02 - Second Article
```

### Logical Sequence

When adding a article, think about where it sits the in the flow of work eg. pairing comes before version control, which comes before TTD

```
01 - Pairing  `02 - Version Control  `03 - TDD
```

### Subpages

If you want to add subpages to split things up, then you can use decimal numbering:

```
02 - User Stories  `02.01 - Story Slicing  `02.03 - Even More Advanced Topic
```

Gatsby will detect the numbering at build time and generate navigation accordingly.