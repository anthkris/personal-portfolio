# K. Anthony Portfolio Site

## About this Site

This is my portfolio! I am currently a front-end engineer (previously a learning experience designer) interested in the intersection of learning experience design, performance, social justice, and coding into a concept I like to call "Work you can Play."

### Fun Facts

- This site was originally ported over from WordPress and is build on Gatsby JS.
- My portfolio has been growing and changing since 2014!
- The previous base design was taken from the MIT licensed portfolio of James Ciclitira: https://github.com/james-ciclitira/portfolio-site
- In 2021, I completely redesigned the site to better reflect the work I want to do in the world.

## Testing

This repo currently has tests written using:

- React testing-library
- Cypress, Cypress-Axe, and Cypress testing-library

## Performance

This site currently has a perfect 100 from Lighthouse on desktop 🥳 and a 93 in performance and 100 everwhere else on mobile.

## File Structure

.
├── **mocks**: Gatsby file mocks
├── .husky: precommit hooks
├── cypress: e2e tests
├── src
│ ├── assets
│ │ └── images
│ ├── components
│ │ ├── **tests**: unit tests for components
│ ├── pages: Site pages
│ ├── styles: Reusable global styles
│ ├── templates: Post and Page reusable templates
│ └── utils: useBoop hook for a little delight, test utilities, and RSS feed helpers
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── babel.config.js
├── cypress.json
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── jest-preprocess.js
├── jest.config.js
├── jest.setup.js
├── loadershim.js
├── package-lock.json
├── package.json
└── README.md
