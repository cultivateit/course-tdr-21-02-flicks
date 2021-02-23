# Flicks - Web App

Copyright © 2021 · cultivate GmbH

## Initial Machine Setup & First Start of App

1. Install dependencies

   `npm install`

1. Copy example settings

   Copy `.env_example` to `.env`.

1. Start Serverless Backend

   `npm run backend:start`

1. Start React App

   `npm start`

## Daily Tasks

*Note: For many of the below NPM scripts there is a `:ci` variant. These variants are usually incomplete (e.g. need additional arguments or env vars), less convenient (e.g. w/o color) or slower (w/o caching). They are meant to be called indirectly only or by the build pipeline.*

##### Dependency Management

The following commands will be applied to the `root` project *and* to the `backend` and `tools` sub projects:

- `npm (run) install` &mdash; Install all dependencies.
- `npm run uninstall` &mdash; Delete `node_modules` and `package-lock.json`.
- `npm run reinstall` &mdash; `uninstall` followed by `install`.

##### Start App and Backend

- `npm run backend:start` &mdash; Start Serverless backend in `dev` mode (with hot reloading).
- `npm (run) start` &mdash; Start React app in `dev` mode (with hot reloading).

##### Storybook

- `npm run storybook` &mdash; Open storybook.
- `npm run storybook:build` &mdash; Build storybook (for sharing/deployment).

##### Linting

- `npm run lint` &mdash; Create report of linting issues.
- `npm run lint:filter <path>` &mdash; Lint only certain files or folders (e.g. `npm run lint:filter src/redux`).
- `npm run lint:fix` &mdash; Auto-fix all fixable linting issues.

##### Testing

- `npm (run) test` &mdash; Execute unit, component and redux tests.
- `npm run test:filter <path>` &mdash; Test only certain files or folders (e.g. `npm run test:filter /Nav.t`)
- `npm run test:watch` &mdash; Start tests in watch mode (which provides further options).

##### Test Coverage

- `npm run cover` &mdash; Generate test coverage report (runs tests and prints report).
- `npm run cover:filter <path>` &mdash; Generate report only for certain files or folders (e.g. `npm run cover:filter redux`).
- `npm run cover:watch` &mdash; Start tests with coverage reporting in watch mode.
- `npm run cover:open` &mdash; Run tests and open coverage report in browser.
- `npm run cover:open:current` &mdash; Open existing coverage report in browser (w/o running tests again).

##### Acceptance Testing

- `npm run test:at` &mdash; Run acceptance tests.
- `npm run test:at:filter <scenario>` Run only certain acceptance tests (e.g. `npm run test:at:filter 'Create ...'`).

##### Build App Bundle

- `npm run build` &mdash; Create production build.
- `npm run build:configure` &mdash; Replace `window.env` configuration in `index.html` with current env vars (incl. `.env`)
- `npm run build:start` &mdash; Start production build.
- `npm run build:analyze` &mdash; Analyze production build size

##### Misc

- `npm run test:all` &mdash; Run linter and all types of tests.
- `npm run bundle:list:browsers` &mdash; List supported browsers.
- `npm run bundle:analyze` &mdash; Visualize bundle size as source tree map.

## Folder structure

- `.storybook` - storybook config (no stories)
- `backend` - serverless-based backend
- `public` - static assets incl. `index.html`
- `src/domain` - shared business domain code
- `src/react` - react components, hooks, component tests, stories, etc.
- `src/redux` - redux related code
- `src/redux/actions` - all redux actions
- `src/redux/middlewares` - all redux middlewares
- `src/redux/reducers` - all redux reducers
- `src/redux/store` - redux store configuration
- `src/redux/test` - all redux tests
- `src/redux/thunks` - all thunks
- `src/services` - browser & remote API integrations
- `src/test` - integration tests (requiring react components & redux store)
- `src/test/utils` - test utilities & test data
- `src/utils` - utilities
- `test/cypress/acceptance` - acceptance tests
- `test/cypress/commands` - custom helper commands
- `tools` - npm helper scripts

## ENV variables

Refer to [.env_example](.env_example) file for a documentation of supported environment variables.
