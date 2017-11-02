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
        console.log(e.dataTransfer.files)
        let _p = e.dataTransfer.files
        this.disposePicture(_p)
        this.setState({
            isDrag: false
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