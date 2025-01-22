import axios from "axios";
import {CreateAxiosDefaults} from 'axios';
import {ElMessage} from "element-plus";
const request = axios.create({
    baseURL: '',
    timeout: 5000
} as CreateAxiosDefaults)

request.interceptors.request.use((config) => {
    return config;
})

request.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        let status = error.response.status;
        switch (status) {
            case 500 | 501 | 502 :
                ElMessage({
                    type: 'error',
                    message: '服务器出现错误，请稍后再试!'
                })
                break;
            case 404 :
                ElMessage({
                    type: 'error',
                    message: '您访问的页面或数据不存在，请检查地址是否有误!'
                })
                break;
            case 401 :
                ElMessage({
                    type: 'error',
                    message: '当前用户未认证!'
                })
                break;
            case 403 :
                ElMessage({
                    type: 'error',
                    message: '没有权限，静止访问!'
                })
                break;
        }
    return Promise.reject(new Error(error.message));
    }
)
export default request;