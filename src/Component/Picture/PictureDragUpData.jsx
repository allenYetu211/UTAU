import React, {Component} from 'react'

class PictureDragUpData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDrag: false,
            imgList: []
        }
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    /**
     * Method Start
     * **/
    dragEnter(e) {
        // 拖入
        e.preventDefault()
        console.log(this.state.imgList.length)
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
        this.setState({
            isDrag: false
        })
    }

    disposePicture(_p) {
        console.log('====== 执行')
        const self = this
        if (_p.length === 0 &&
            (_p.type.indexOf('image')) === -1) return
        // let img = window.webkitURL.createObjectURL(_p[0])
        // 声明图片信息
        var reader = new window.FileReader()
        reader.readAsDataURL(_p)
        reader.onload = function (oireader) {
            // 解构设置state
            self.setState(preState => ({
                    imgList: [...preState.imgList, oireader.target.result]
                })
            )
        }
    }


    /**
     * Method End
     * **/

    render() {
        const isDrag = this.state.isDrag
        let hint = isDrag ? `Drag` : `Drag-upDataPicture`
        const imgList = this.state.imgList
        let imgUrl = null
        if (imgList.length >= 0) {
            imgUrl = imgList.map((e, index) => {
                return <li className="image__items" key={index}>
                    <img alt="" src={e}/>
                </li>
            })
        }
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
            </div>
        )
    }
}

export default PictureDragUpData