# Vue3 TS Boilerplate (slim)

The goal of this project is to effectively add minimal dependencies that actually work for the vue/ts/vite ecosystem. No `insane` animation libraries here!

- vue3
- typescript
- pinia for state mgmt
- vue-router
- eslint
- prettier
- storybook
- unit tests/code cov (vitest & testing library)
- generators (plop)

testing & storybook examples: `src/components/examples`

## Project Setup

use yarn  
node 16

```sh
yarn
```

## Compile and Hot-Reload for Development

```sh
yarn dev
```

## Type-Check, Compile and Minify for Production

```sh
yarn build
```

## Deploy

```sh
.. coming soon ..
```

## Storybook

With interaction testing

```sh
yarn storybook
```

## Unit Tests

Using Vitest

```sh
yarn test
```

## Generate new files

Create new Components/Views/Stores  
By default adds a unit test and includes option to add story.

```sh
yarn generate
```
