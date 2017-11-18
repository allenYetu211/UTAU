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

    render() {
        return (
            <ul className="article__list--content grid-list-tiles has-1-columns">
                {
                    this.state.list.map(e => {
                        return <li className="grid-list-tile" key={e.title} data-id={e.id}>

                            <div className="article__infor">
                                <div className="article__title">{e.title}</div>
                                <div className="article__items">{e.uploadingTiem}</div>
                            </div>
                            <div className="article__content-list">
                                {e.contentLess}
                            </div>
                            <div className="article__more">
                                <div className="article__more--infor">
                                    <Link to={`/ArticleCompile/${e.id}`}> 详情</Link>
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