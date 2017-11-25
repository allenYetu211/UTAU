import React, {Component} from 'react'
import axios from '../../Public/js/axios'

class PictureDragUpData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrag: false,
            imageUpdata: null, // 上传图片数组
            imgList: [],
            serverList: []
        }
    }

    async componentDidMount() {
        let data = await axios.ajax('pic/allPicture')
        this.setState({
            serverList: data.data
        })
    }

    componentWillUpdate() {
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
        let _p = e.dataTransfer.files
        this.disposePicture(_p)
        this.setState({
            isDrag: false,
            imageUpdata: e.dataTransfer.files
        })
    }

    disposePicture(_p) {
        const self = this
        if (_p.length === 0) return
        // let img = window.webkitURL.createObjectURL(_p[0])
        // 声明图片信息
        Array.prototype.map.call(_p, (e) => {
            let reader = new window.FileReader()
            reader.readAsDataURL(e)
            reader.onload = function (oireader) {
                // 解构设置state
                self.setState(state => ({
                        imgList: [...state.imgList, oireader.target.result]
                    })
                )
            }
            return true
        })
    }

     uploadImage() {
        Array.prototype.map.call(this.state.imageUpdata, async (e) => {
            let formData = new FormData()
            formData.append('file', e)
            await axios.fileUpata(formData, 'pic/picture/upload')
        })
    }


    /**
     * Method End
     * **/

    render() {
        const isDrag = this.state.isDrag
        let hint = isDrag ? `Drag` : `Drag-upDataPicture`

        /**
         * 拖拽在线预览图片
         * */
        const imgList = this.state.imgList
        let imgUrl = null
        if (imgList.length >= 0) {
            imgUrl = imgList.map((e, index) => {
                return <li className="image__items" key={index}>
                    <img alt="" src={e}/>
                </li>
            })
        }

        /**
         * 数据库数据读取
         * */
        // let sergerImag = this.state.serverList.map((e, index) => {
        //     let _src = 'http://127.0.0.1' + e.Picture
        //     console.log(_src)
        //     return <li className="image__items" key={index}>
        //         <img src={_src} alt=""/>
        //     </li>
        // })
        //


        return (
            <div>
                <div id="drag-area"
                     onDragEnter={(e) => this.dragEnter(e)}
                     onDragOver={(e) => this.dragOver(e)}
                     onDragLeave={(e) => this.dragLeave(e)}
                     onDrop={(e) => this.drop(e)}>
                    {hint}
                </div>
                <ul className="image__list">
                    {imgUrl}
                </ul>

                <button onClick={(e) => this.uploadImage(e)}>
                    upload Image
                </button>
            </div>
        )
    }
}

export default PictureDragUpData