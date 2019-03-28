'use strict'

const React = require('react')
const { createStore } = require('redux')
const { Provider } = require('react-redux')
const { default: App, Container } = require('next/app')

exports.appWithRedux = function appWithRedux(reducer, enhancer) {
    const cached = Symbol('store')

    function getStore(initialState) {
        if (typeof window == 'undefined')
            return createStore(reducer, initialState, enhancer)

        return window[cached] ||
            (window[cached] = createStore(reducer, initialState, enhancer))
    }

    return class AppWithRedux extends App {
        static async getInitialProps(appContext) {
            const props = await super.getInitialProps(appContext)
            const store = getStore()
            return Object.assign(props, { initialState: store.getState() })
        }

        constructor(props) {
            super(props)
            this.store = getStore(props.initialState)
        }

        render() {
            const { Component, pageProps } = this.props
            return (
                /* <Container>
                    <Provider store={this.store}>
                        <Component {...pageProps} />
                    </Provider>
                </Container> */
                React.createElement(Container, null,
                    React.createElement(Provider, { store: this.store },
                        React.createElement(Component, pageProps)))
            )
        }
    }
}
