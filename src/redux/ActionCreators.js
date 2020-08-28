import * as ActionTypes from './ActionTypes';

export const add_Comment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload : {
        dishId :dishId,
        rating :  rating,
        author : author,
        comment : comment
    }
});