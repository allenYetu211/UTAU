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
        let h = date.getHours() + ':'
        let m = date.getMinutes() + ':'
        let s = date.getSeconds();
        console.log(Y + M + D + h + m + s);
        return Y + M + D + h + m + s
    }

    render() {

        return (
            <ul className="article__list--content grid-list-tiles has-1-columns">
                {
                    this.state.list.map(e => {
                        return <li className="grid-list-tile" key={e.title}>

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
                        </li>
                    })
                }
            </ul>
        )
    }
}

export default ArticleItems