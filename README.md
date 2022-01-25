### `If you find this repo / template useful all I ask is you please star it ⭐`

# Create React App + Webpack 5 + Module Federation + Tailwind 2 + TypeScript

Slightly opinionated React boilerplate using Create React App with React 17, Webpack 5, Tailwind 2, Module Federation, and TypeScript.

## Prerequisites

* Node 14.0.0 or later version
* Yarn classic 1.22.5 or 2.x.x preferred

## Webpack 5 / Module Federation

To Support Webpack 5 [Create React App 5](https://github.com/facebook/create-react-app/releases/tag/v5.0.0) has been used, this will be updated as soon as new versions are available.

The template contains a basic Module Federation example, there are two Apps App1 and App2.

App1 is the host app, and App2 is the remote app - which exposes the `Button` component. To start Run `yarn start` for both App1 and App2.

A CRACO plugin is used to configure Module Federation, configure Module Federation as you normally would except the config lives in `modulefederation.config.js`.

To get a better understanding of Module Federation read [Webpack 5 Module Federation: A game-changer in JavaScript architecture](https://indepth.dev/posts/1173/webpack-5-module-federation-a-game-changer-in-javascript-architecture)

See the official [Module Federation](https://github.com/module-federation/module-federation-examples) repo for further code examples.

Webpack Module Federation [documentation](https://webpack.js.org/concepts/module-federation/).

## Getting Started

Same as Create React App, but as the template contains a Module Federation example you will need to run `yarn start` for both App1 and App2

### `yarn install`
Installs all dependencies for the project.

### `yarn start`

Runs the app in development mode.
`app1`: Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
`app2`: Open [http://localhost:30003(http://localhost:3002) to view it in the browser.

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `yarn test`

Runs the test watcher in an interactive mode. default, runs tests related to files changed since the last commit.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Summary

This template Uses CRA + [Create React App Configuration Override - CRACO](https://github.com/gsoft-inc/craco) to customise CRA (For example we changed the webpack config to support Module Federation), which means we don't need to reinvent the wheel. 
If we run into any issues we can still eject, and pull out what we need.

## src Folder / File Structure
Slightly opinionated because any folder under src is pascal case - because IMO you have to use Pascal Case for your React Components
anyway so why not keep the same conventions for everything. You can change this if it's not to your taste, the only thing enforced by eslint is that the naming of React Components is Pascal Case. 
```
app1/
├─ src/
│  ├─ Components/
│  ├─ Apis/
│  ├─ Apis/
│  ├─ Assets/
│  ├─ Components/
│  ├─ Context/
│  ├─ Hooks/
│  ├─ Pages/
│  ├─ Styles/
│  ├─ Utils/

```

### Example Component
By design, the src folder structure above should be self-explanatory, but it's worth unpacking an example (this example is also in the repo).

Let's take an example of the [Button](/app2/src/Components/Button) component, but the principle is the same for anything. 
The principle is that everything related should be easily found from one folder.
```
app2/
├─ src/
│  ├─ Components/
│  │  ├─ Button/
│  │  │  ├─ index.tsx
│  │  │  ├─ index.test.tsx
│  │  │  ├─ styles.module.scss

```

The `Button` component itself lives in the `Components/Button` folder, the file is named `index.tsx` so that it is the default module for that folder. 

In index.tsx we use a named export, we do not use a default export as we want the naming of our `imports` to be consistent.    
![gif.gif](https://miro.medium.com/max/480/1*DV9TTNn2JZJKDyCESmElvQ.gif) (again not enforced if this is not to your taste)

By following this simple convention it makes the `import` resolution easy to understand, for example for our `Button` component: 
```javascript
import { Button } from "Components/Button";
```

#### Tests
In the `Button` Component folder example your notice a file called `index.test.tsx`, again the idea here is the tests live with the component so they are easy to find.

#### styles.module.scss
styles.module.scss / styles.module.css file contains any styles for the component using [CSS Modules](https://github.com/css-modules/css-modules). 
CSS Modules scopes the css classes to the component which stops class name conflicts. 
Again the component should be self-contained in the one folder, and styles that are just for this component shouldn't live elsewhere. 

### Styles
Global styles live here, but we should favor Tailwind utilities / theming, and avoid vanilla CSS / global classes.

## React Testing Library
React Testing Library should be used for component testing.
See [Button\index.test.tsx](\app2\src\Components\Button\index.test.tsx) for a working test example. Running `yarn test` will run the test.

## Cypress
Cypress should be used for end-to-end testing of a user journey. 

### Opening Cypress Test Runner Against localhost
* #### Start app1 and app2 using `yarn start`
* #### Open the test runner `yarn run cypress open` in app1

See [cypress\integration\Home\home.spec.js](\app1\cypress\integration\Home\home.spec.js) for a working test example.

## The Rationale for Package Choices

### CRA + TypeScript
TypeScript is preferred to make it easier to refactor.

### CRACO
[Create React App Configuration Override - CRACO](https://github.com/gsoft-inc/craco) has been used to customise CRA to allow us to configure our own eslint rules, and to support Module Federation.

### ESLint
[Airbnb's ESlint rules](https://github.com/airbnb/javascript) with TypeScript support. The only real change is double quotes for imports, this is easy to change if this isn't to your taste.

### Stylelint
Set up with basic rules mainly formatting.

### classnames
[classnames](https://github.com/JedWatson/classnames#readme) makes it easy and readable to conditionally join classNames together.

### Tailwind 2
Tailwind 2 has been added with a very basic configuration you will most certainly need to configure for your own needs. 
[JIT Mode](https://tailwindcss.com/docs/just-in-time-mode) has been enabled because it's awesome, see [\Pages\Home\index.tsx](\app1\src\Pages\Home\index.tsx) for an example.

### React Routing
Because you need routing. See src/App.tsx for an example. 

### Credits
CRACO Module Federation plugin taken from https://github.com/hasanayan/craco-module-federation (MIT License).












