const app = require('koa')();
const router = require('koa-router')();

const homeAdData = require('./home/ad.js');
router.get('/api/homead', function *(next) {
    this.body = homeAdData;
})

const homeListData = require('./home/list.js');
router.get('/api/homelist/:city/:page', function *(next) {
    const params = this.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log('当前城市：' + paramsCity);
    console.log('当前页面：' + paramsPage);

    this.body = homeListData;
})

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
