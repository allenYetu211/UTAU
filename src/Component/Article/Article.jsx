import React, {Component} from 'react';
import ArticleList from './ArticleList'
import './article.scss';
class Article extends Component {

    render() {
        return(
            <div className="article__content">
                <ArticleList/>
            </div>
        );
    }
}
export default Article;