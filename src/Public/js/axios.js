import axios from 'axios'
import config from '../config'

export default {
    async ajax(url = '', data = {}, method = 'GET', params = {}) {
        const _d = await axios({
            url: config.serverURL + url,
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data,
            params: params
        })
        return _d
    },
    async fileUpata(target, url = '') {
        const _d = await axios({
            url: config.serverURL + url,
            method: 'POST',
            headers: {'Content-Type': 'multipart/form-data'},
            data: target
        })
        return _d
    },
    async updataPicture(target) {
        return await axios({
            url: '//up.qbox.me/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: target
        })
    }
}
