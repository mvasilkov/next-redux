next-redux
===

Next.js Redux coupling

[![npm][npm-image]][npm-url] ![][size-image]

---

Installation
---

    yarn add next-redux

Synopsis
---

    appWithRedux(reducer, [enhancer])

Usage
---

In **pages/_app.js** of your Next.js project:

```javascript
import { combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { appWithRedux } from 'next-redux'

const reducer = combineReducers(/* Your reducers here */)

/* Optional: using redux-thunk and redux-devtools */
const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export default appWithRedux(reducer, enhancer)
```

[npm-image]: https://img.shields.io/npm/v/next-redux.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/next-redux
[size-image]: https://img.shields.io/github/size/mvasilkov/next-redux/app.js.svg?style=flat-square
