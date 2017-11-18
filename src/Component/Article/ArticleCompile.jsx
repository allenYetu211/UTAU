import React, {Component} from 'react';
import {withRouter} from "react-router";
import ArticleMarkDown from './ArticleMarkDown'
import ArticleContainer from './ArticleContainer'
import Input from '../PublicComponent/input'
import Textarea from '../PublicComponent/input/textarea'
import axios from '../../Public/js/axios'
import {observer, inject} from 'mobx-react'

@inject(({article}) => {
    return {
        article: article
    }
})

@observer
class ArticleCompile extends Component {
    constructor(props, context) {
        super(props);
        this.router = context.router
        this.onChange = (editorState) => this.setState({editorState});
    }

    /**
     *  获取，文章标题，介绍，内容数据，存入mobx store
     * */
    getValue = (e) => {
        let _t = e.target
        if (_t.className.includes('input__component')) {
            this.props.article.setTitle(_t.value)
        } else if (_t.className.includes('textarea__component')) {
            this.props.article.setIntroduce(_t.value)
        } else if (_t.className.includes('editor__component')) {
            this.props.article.setContent(_t.value)
        }
    }
     updataArtilce = async () => {
        let articleData = this.props.article.articleData()
        await axios.ajax('article/storeArticle',articleData, 'POST').then(res => {
            this.props.history.push('/Article')
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (


            <div className="article__content--compile">
                <div className="article__content--input p-bottom-margin">
                    <ArticleContainer
                        title="文章标题"
                        container={
                            <Input
                                getValue={this.getValue}
                                placeholder="输入文章"/>}
                    />
                </div>

                <div className="article__content--textarea p-bottom-margin">
                    <ArticleContainer
                        title="文章描述"
                        container={
                            <Textarea
                                getValue={this.getValue}
                                placeholder="输入文章"/>}
                    />
                </div>

                <div className="article__content--markdown p-bottom-margin">
                    <ArticleContainer
                        title="发表文章"
                        container={<ArticleMarkDown
                            getValue={this.getValue}/>}
                    />
                </div>
                <button className="c-btn article__btn--updata" onClick={this.updataArtilce}> 更新</button>
            </div>
        );
    }
}


export default withRouter(ArticleCompile);

