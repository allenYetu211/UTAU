import React, {Component} from 'react';
import ArticleList from './ArticleList'
import './article.scss';
// TODO 文章在此组件中替换
class Article extends Component {
    render() {
        return (
            <div className="article">
                <div className="article__title">
                    <h2>所有文章</h2>
                </div>
                <div className="article__content">
                    <ArticleList/>
                </div>
            </div>
        );
    }
}

export default Article;