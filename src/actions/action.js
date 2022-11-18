import { ADD, DELETE } from "../constants/actionTypes"

const addAction = (input) => {
    return {
        type: ADD,
        payload: input
    }
}

const deleteAction = (input) => {
    return {
        type: DELETE,
        payload: input
    }
}

export {addAction, deleteAction};
