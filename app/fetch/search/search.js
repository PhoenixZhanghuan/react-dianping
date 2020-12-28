import {get} from '../get'

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    return get('/api/search/' + page + '/' + cityName + '/' + category + keywordStr)
}