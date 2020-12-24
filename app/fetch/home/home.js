import {get} from '../get';

export function getAdData() {
    return get('/api/homead');
}

export function getListData(city, page) {
    return get('/api/homelist/' + encodeURIComponent(city) + '/' + page);
}