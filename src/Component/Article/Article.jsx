import React, {Component} from 'react';
import ArticleList from './ArticleList'
import './article.scss';

import {UiTitle} from '../UiComponents/combination'

class Article extends Component {
    render() {
        return (
            <div className="article">
                <UiTitle
                    title="所有文章"
                />
                <div className="article__content">
                    <ArticleList/>
                </div>
            </div>
        );
    }
}

export default Article;