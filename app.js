'use strict'

const React = require('react')
const { createStore } = require('redux')
const { Provider } = require('react-redux')
const { default: App } = require('next/app')

const server = typeof window == 'undefined'
const cache = Symbol('store')

exports.getStore = () => server ? undefined : window[cache]

exports.appWithRedux = function appWithRedux(reducer, enhancer) {
    function getStore(initialState) {
        if (server) return createStore(reducer, initialState, enhancer)
        if (window[cache]) return window[cache]
        return window[cache] = createStore(reducer, initialState, enhancer)
    }

    return class AppWithRedux extends App {
        static async getInitialProps(appContext) {
            const props = await super.getInitialProps(appContext)
            return Object.assign(props, { initialState: getStore().getState() })
        }

        constructor(props) {
            super(props)
            this.store = getStore(props.initialState)
        }

        render() {
            const { Component, pageProps } = this.props
            return (
                /* <Provider store={this.store}>
                    <Component {...pageProps} />
                </Provider> */
                React.createElement(Provider, { store: this.store },
                    React.createElement(Component, pageProps))
            )
        }
    }
}
