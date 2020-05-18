next-redux
===

Next.js Redux coupling

[![npm][npm-badge]][npm-url]
[![no dependencies][dependencies-badge]][dependencies-url]
[![][size-badge]][npm-url]

---

Installation
---

```sh
npm add redux react-redux next-redux
```

Synopsis
---

```javascript
appWithRedux(reducer, [enhancer])
```

Usage
---

In the **pages/_app.js** file of your Next.js project:

```javascript
import { combineReducers, applyMiddleware } from 'redux'
import { appWithRedux } from 'next-redux'

const reducer = combineReducers(/* Your reducers here */)

export default appWithRedux(reducer)
```

<p align="center"><sup>File: pages/_app.js</sup></p>

#### With redux-devtools and redux-thunk

```javascript
import { combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { appWithRedux } from 'next-redux'

const reducer = combineReducers(/* Your reducers here */)
const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export default appWithRedux(reducer, enhancer)
```

<p align="center"><sup>File: pages/_app.js</sup></p>

License
---

MIT

[npm-badge]: https://img.shields.io/npm/v/next-redux.svg?style=flat
[npm-url]: https://www.npmjs.com/package/next-redux
[dependencies-badge]: https://img.shields.io/librariesio/release/npm/next-redux?style=flat
[dependencies-url]: https://www.npmjs.com/package/next-redux?activeTab=dependencies
[size-badge]: https://img.shields.io/github/size/mvasilkov/next-redux/app.js.svg?style=flat
