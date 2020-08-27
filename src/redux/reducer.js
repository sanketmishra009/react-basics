//data imports from shared directory.

import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import {COMMENTS} from '../shared/comments';

export const initialState = {
    dishes:DISHES,
    comments:COMMENTS,
    leaders:LEADERS,
    promotions:PROMOTIONS
}

export const Reducer = (state=initialState, action)=>{
    return state;
}