import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ArticleItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentWillReceiveProps(val, oldval) {
        this.setState({
            list: val.item
        })
    }

    transformTime(tims) {
        let date = new Date(tims);
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        let D = date.getDate() + ' '
        let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
        let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
        return Y + M + D + h + m + s
    }

    render() {

        return (
            <ul className="article__list--content grid-list-tiles has-1-columns">
                {
                    this.state.list.map(e => {
                        let picture = `http://${e.picture}`
                        return (
                            <li className="grid-list-tile article__list--tile-item" key={e.title}>
                                <div className="article__list--picture">
                                    <img src={picture} alt=""/>
                                </div>
                                <div className="article__infor--container">
                                    <div className="article__infor">
                                        <div className="article__title">{e.title}</div>
                                        <div className="article__items">
                                            {
                                                this.transformTime(e.timestamp)
                                            }
                                        </div>
                                    </div>
                                    <div className="article__content-list">
                                        {e.introduce}
                                    </div>
                                    <div className="article__more">
                                        <div className="article__more--infor">
                                            <Link to={`/ArticleModification/${e._id}`}> 详情</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default ArticleItems