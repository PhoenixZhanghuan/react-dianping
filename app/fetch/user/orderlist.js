import {get} from '../get'

export function getOrderListData(username) {
    return get('/api/orderlist/' + username)
}