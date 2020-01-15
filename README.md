# Steps to reproduce the bug

1. install dependencies

```sh
npm install
```

2. build with rollup

```sh
rm -rf ./dist
npx rollup -c rollup.config.js
```

3. check out the output files in the `dist` folder, we will find that there is an extra `import 'lodash-es'` in `index.es.js` and `utils.es.js`, which seems to be unnecessary and would force the users of this package to include the whole `lodash-es` into their bundles.

```js
import 'lodash-es';
export { c as checkIsNumber } from './shared-70166db4.js';
```
