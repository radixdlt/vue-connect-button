# Vue Radix Connect Button

## About

This repository contains example integration of `@radixdlt/connect-button` and Vue3 application

- Make sure you have following code inside your vue instance configuration
``` 
{
  template: {
    compilerOptions: {
      isCustomElement: (tag) => ['radix-connect-button'].includes(tag),
    }
  }
}
```
- See `main.js` for connect-button configuraion and `TheWelcome.vue` for usage

See [connect-button repository](https://github.com/radixdlt/connect-button) for more information

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
