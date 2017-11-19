import React, {Component} from 'react'
import axios from '../../Public/js/axios'
import ArticleItmes from './ArticleItems'
import {observer, inject} from 'mobx-react'

@inject(({article}) => {
    console.log('article', article)
    return {
        article: article
    }
})

@observer
class ArticleList extends Component {

    constructor(param) {
        super(param)
        this.state = {
            articleList: null,          // Array
            articleListCount: null,     // Number
        }
    }

    async componentDidMount() {
        const {data} = await axios.ajax('article/articleList')
        this.props.article.setArticleList(data)
        console.log(data)
        this.setState({
            articleList: data.content,
            articleListCount: data.count
        })
    }

    render() {
        return (
            <div className="article__content--all">
                <div className="article__count">
                    Articlenum: <span className="article__count--number"> {this.props.article.articleList.count}</span>
                </div>
                <ArticleItmes item={this.props.article.articleList.content}/>
            </div>
        )
    }
}

export default ArticleList