import React, {Component} from 'react'
import axios from '../../Public/js/axios'
import ArticleItmes from './ArticleItems'

class ArticleList extends Component {

    constructor(param) {
        super(param)
        this.state = {
            articleList: null,          // Array
            articleListCount: null,     // Number
        }
    }

    async componentDidMount() {
        const data = await axios.ajax('article/articleList')
        console.log(data)
        this.setState({
            articleList: data.data.content,
            articleListCount: data.data.count
        })
    }

    render() {
        return (
            <div className="article__content">
                <div className="article__count">
                    Articlenum: <span className="article__count--number"> {this.state.articleListCount}</span>
                </div>
                <ArticleItmes item={this.state.articleList}/>
            </div>
        )
    }
}

export default ArticleList