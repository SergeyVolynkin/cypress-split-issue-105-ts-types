## About:

Example of `Webpack Compilation Error` when using paths aliases in Typescript (running `empty-4-of-4.cy.js` spec). As discussed in https://github.com/bahmutov/cypress-split/issues/105

## Steps to reproduce:

```
npm install
SPLIT=4 SPLIT_INDEX=3 npx cypress run
```

### Expected:

`empty-4-of-4.cy.js` spec passes

### Actual:

`empty-4-of-4.cy.js` spec fails with the following error:

```
Oops...we found an error preparing this test file:

  > cypress/support/e2e.ts

The error was:

Error: Webpack Compilation Error
Module not found: Error: Can't resolve '#/utils' in '/Users/…/…/cypress-split-issue-105-ts-types/cypress/support'
```

### Root Cause Analysis:

Experimentation showed that he issue is coming from the way `tsconfig.json` is setup in the code.
We use multiple `tsconfig-*.json` that are then referenced in `tsconfig.json` using `"references": [{ "path": "./tsconfig-src.json" }]` keyword.

it seems that `references` setting is not respected during execution of the `empty-4-of-4.cy.js` spec (at the same time `SPLIT=4 SPLIT_INDEX=1 npx cypress run` works as expected).
