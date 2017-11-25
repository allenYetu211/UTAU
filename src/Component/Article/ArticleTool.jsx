import React, {Component} from 'react'
import axios from '../../Public/js/axios'
import {observer, inject} from 'mobx-react'

@inject(({article}) => {
    return {
        domain: article.domain,
        article: article.article,
        setPicturePath: article.setPicturePath
    }
})

@observer
class ArticleTool extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrag: false,
            imageUpdata: null, // 上传图片数组
            imgList: [],
            serverList: [],
            previewPicture: null
        }
    }

    async componentDidMount() {
    }

    componentWillUpdate() {
    }

    componentWillReceiveProps(val, oldVal) {
        if (val.val === '') {
            this.setState({previewPicture: ``})
        } else {
            this.setState({previewPicture: `http://${val.val}`})
        }
    }

    /**
     * Method Start
     * **/
    dragEnter(e) {
        // 拖入
        e.preventDefault()
        this.setState({
            isDrag: true
        })
    }

    dragOver(e) {
        // 拖动
        e.preventDefault()
    }

    dragLeave(e) {
        // 拖出
        e.preventDefault()
        this.setState({
            isDrag: false
        })
    }

    drop(e) {
        // 放下
        e.preventDefault()
        let _p = e.dataTransfer.files[0]
        this.disposePicture(_p)
        this.uploadImage(_p)
        this.setState({
            isDrag: false,
            imageUpdata: _p
        })
    }

    disposePicture(_p) {
        const self = this
        if (_p.length === 0 && _p.length > 1) return
        // 声明图片信息
        let reader = new window.FileReader()
        reader.readAsDataURL(_p)
        reader.onload = (oireader) => {
            self.setState(state => ({
                    previewPicture: oireader.target.result
                })
            )
        }
    }

    /**
     * 处理上传参数
     * @param target
     * @returns {Promise.<void>}
     */
    async uploadImage(target) {
        let domain = this.props.domain
        console.log(domain)
        let formData = new FormData()
        formData.append('file', target)
        formData.append('token', this.props.uptoken)
        formData.append('key', target.name)
        formData.append('accept', '')
        await axios.updataPicture(formData).then(({data}) => {
            this.props.setPicturePath(`${domain}/${data.key}`)
        })
    }


    render() {
        const isDrag = this.state.isDrag
        let hint = isDrag ? `Drag` : `Drag-upDataPicture`
        return (
            <div>
                <div className="article__picture">
                    <div id="drag-area"
                         className="article__tool--drag-area"
                         onDragEnter={(e) => this.dragEnter(e)}
                         onDragOver={(e) => this.dragOver(e)}
                         onDragLeave={(e) => this.dragLeave(e)}
                         onDrop={(e) => this.drop(e)}>
                        {hint}
                    </div>
                    <div className="article__preview-picture">
                        <img src={this.state.previewPicture} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleTool;