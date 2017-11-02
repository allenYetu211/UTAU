import axios from 'axios'
import config from '../config'

export default {
    async ajax(url = {}, data = {}, method = 'GET') {
        const _d = await axios({
            url: config.serverURL + url,
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
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
    }
}
