import { RECEIVE_PHONES } from '../actions/phones'

export const MOVE_INCART = 'MOVE_INCART'

export const REMOVE_INCART = 'REMOVE_INCART'

export default function phones(state = {}, action) {
    switch (action.type) {
        case RECEIVE_PHONES:
            return {
                ...state,
                ...action.phones
            }
        case MOVE_INCART:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    inCart: 'true'
                }
            }
        case REMOVE_INCART:
            return {
                ...state,
                [action.main]: {
                    ...state[action.main],
                    inCart: 'false'
                }
            }
        default:
            return state
    }
}