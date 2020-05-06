'use strict'

const initialState = {
    count: 0,
}

export default function count(state = initialState, action) {
    switch (action.type) {
        case 'increment':
            return Object.assign({}, state, {
                count: state.count + 1,
            })

        case 'decrement':
            return Object.assign({}, state, {
                count: state.count - 1,
            })
    }
    return state
}

export const inc = () => ({
    type: 'increment',
})

export const dec = () => ({
    type: 'decrement',
})
