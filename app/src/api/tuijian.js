import request from '../utils/request';

export default {
    //首页瀑布流
    tuijianWaterFall(type, page, pageSize) {
        return request.get('/meishijie/getlist', {
            params: {
                type,
                page,
                pageSize
            }
        })
    }

}