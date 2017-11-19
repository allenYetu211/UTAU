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
        // modification - 是否为编辑文章详情模式
        this.state = {
            modification: false
        }
        this.onChange = (editorState) => this.setState({editorState});
    }

    /**
     * 根据路由是否拥有id, 编辑已有文章，发表新文章
     * **/
    async componentWillMount() {
        if (!!this.props.match.params.id) {
            await axios.ajax('article/findArticle', {}, 'GET', {
                articleId: this.props.match.params.id
            }).then(({data}) => {
                this.setState({
                    _id: data._id,
                    modification: true
                })
                this.props.article.setTitle(data.title)
                this.props.article.setIntroduce(data.introduce)
                this.props.article.setContent(data.content)
            })
        } else {
            this.props.article.setTitle('')
            this.props.article.setIntroduce('')
            this.props.article.setContent('')
        }
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

    /**
     * 存入文章，跳转至新的页面
     * **/
    updataArtilce = async () => {
        let articleData = this.props.article.articleData()
        /***
         * @param url - 连接地址
         * @param data - 数据
         * @param method - 请求方法
         * @param id - 文章Id
         * **/
        let method = 'POST'
        let _id = {}
        // 判断为更新or修改
        if (this.state.modification) {
            method = 'PUT'
            _id = {
                articleId: this.state._id
            }
        }
        articleData.timestamp = Date.parse(new Date())

        await axios.ajax('article/storeArticle', articleData, method, _id).then(() => {
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
                                val={this.props.article.article.title}
                                getValue={this.getValue}
                                placeholder="输入文章"/>}
                    />
                </div>

                <div className="article__content--textarea p-bottom-margin">
                    <ArticleContainer
                        title="文章描述"
                        container={
                            <Textarea
                                val={this.props.article.article.introduce}
                                getValue={this.getValue}
                                placeholder="输入文章"/>}
                    />
                </div>

                <div className="article__content--markdown p-bottom-margin">
                    <ArticleContainer
                        title="发表文章"
                        container={
                            <ArticleMarkDown
                                val={this.props.article.article.content}
                                getValue={this.getValue}/>
                        }
                    />
                </div>
                <button className="c-btn article__btn--updata" onClick={this.updataArtilce}> 更新</button>
            </div>
        );
    }
}


export default withRouter(ArticleCompile);

