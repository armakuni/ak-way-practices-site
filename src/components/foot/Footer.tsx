import React, { FC } from "react";

const Footer: FC = () => (
  <>
    <div className={"grow-0"}></div>
    <footer className="text-base-200-content footer footer-center rounded bg-base-200 p-10">
      <div className="grid grid-flow-col gap-4">
        <a className="link-hover link" href="/about">
          About Insights
        </a>
        <a className="link-hover link" href="https://www.armakuni.com/">
          About Armakuni
        </a>
        <a className="link-hover link" href="/faq">
          Frequently Asked Questions
        </a>
        <a
          className="link-hover link"
          href="https://www.armakuni.com/get-in-touch"
        >
          Contact
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            aria-label="Armakuni's Twitter"
            href="https://twitter.com/armakunihq"
          >
            <svg
              className="fill-current"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            aria-label="Armakuni's YouTube Channel"
            href="https://www.youtube.com/@armakunihq"
          >
            <svg
              className="fill-current"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
          <a
            aria-label="Armakuni's LinkedIn"
            href="https://www.linkedin.com/company/armakuni/"
          >
            <svg
              height="24"
              viewBox="0 0 448 512"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by
          Armakuni Ltd
        </p>
      </div>
    </footer>
  </>
);

export default Footer;
