import {
    orderDetailsReducer as reducer,
    initialState as state
} from './order-details';
import { getOrderSuccess } from '../actions/order-details';
import { id } from '../../utils/test-constants';

describe('order-details reducer test', () => {
    it('should handle get order details success', () => {
        expect(reducer(state, getOrderSuccess(id)))
            .toEqual({
                id: id
            })
    })
})
