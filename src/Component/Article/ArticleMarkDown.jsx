import React, {Component} from 'react';
import marked from 'marked'
import {Icon} from 'antd';

// import hljs from 'highlight'

class ArticleMarkDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            full: false
        }
    }

    triggerFull = () => {
        this.setState({
            full: !this.state.full
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
        this.props.getValue(e, this.state.value)
    }

    render() {
        const full = this.state.full;
        return (
            <div classID="markDown">
                <div className="edit-area">
                    <div className="tool__column">
                        <div className="toll__bar">
                            <button className="c-btn c-btn-child" onClick={this.triggerFull}>
                                <Icon type="minus-square-o"/>
                                <span>
                                {full ? (
                                    '退出全屏'
                                ) : (
                                    '全屏'
                                )}
                                </span>
                            </button>
                        </div>

                    </div>

                    <textarea
                        placeholder="请输入markdown文本"
                        classID="editor"
                        className="editor c-input editor__component"
                        onChange={this.handleChange}
                    ></textarea>

                </div>
                <Shower content={this.state.value} isfull={full}></Shower>
            </div>
        )
    }
}

const Shower = () => ({
    convertor: function (content) {

        var rendererMD = new marked.Renderer();
        marked.setOptions({
            renderer: rendererMD,
            // highlight: function (code) {
            //     return hljs.highlightAuto(code).value;
            // },
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
        });

        //console.log(marked(content));
        return ({
            __html: marked(content)
        });//注意是两个下划线！
    },
    render: function () {
        let fullShow = this.props.isfull ? 'markDown__full__container' : 'markDown__full__not--container'
        return (
            <div
                className={`shower ${fullShow}`}
                id="shower"
                dangerouslySetInnerHTML={this.convertor(this.props.content)}></div>
        );
    }
});
export default ArticleMarkDown;