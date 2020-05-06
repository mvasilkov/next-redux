'use strict'

import React from 'react'
import { connect } from 'react-redux'

import { inc, dec } from '../reducers/count'

class StartPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={this.props.dec}>−</button>
                <input disabled value={this.props.count} />
                <button onClick={this.props.inc}>+</button>
            </React.Fragment>
        )
    }
}

const stateToProps = state => ({
    count: state.count.count,
})

const dispatchToProps = dispatch => ({
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec()),
})

export default connect(stateToProps, dispatchToProps)(StartPage)
