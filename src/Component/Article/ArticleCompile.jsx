import React, {Component} from 'react';
import {Editor, EditorState, convertToRaw} from 'draft-js';

class ArticleCompile extends Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
    }

    upDataArticle() {
        const blocks = convertToRaw(this.state.editorState.getCurrentContent())
        console.log(blocks)
    }
    // TODO 拼接JSON发送数据 - 存入数据库
    // TODO 解析数据内容
    render() {
        return (
            <div className="article__content--compile">
                <div className="article__content--title">
                    <input type="text" placeholder="Title"/>
                </div>

                <div className="article__content--compile-main">
                        <Editor editorState={this.state.editorState} onChange={this.onChange}/>
                    </div>
                    <button onClick={(e) => this.upDataArticle(e)}>updata</button>
            </div>
        );
    }
}

export default ArticleCompile;
