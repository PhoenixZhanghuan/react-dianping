import {get} from './get';
import {post} from './post';

export function getData() {
    const result = get('/api/1');
    result.then(res => {
        return res.text();
    }).then(text => {
        console.log(text);
    })

    const result1 = get('/api/2');

    result1.then(res => {
        return res.json();
    }).then(json => {
        console.log(json);
    })
}

export function postData() {
    const result = post('/api/post', {
        a: 100,
        b: 200
    })

    result.then(res => {
        return res.json();
    }).then(json => {
        console.log(json);
    })
}