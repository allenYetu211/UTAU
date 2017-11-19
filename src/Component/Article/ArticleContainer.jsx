import React, {Component} from 'react';
class ArticleContainer extends Component {
    render() {
        return (
            <div className="article__card--container"
                 style={this.props.style}
            >
                <div className="article__card--container--title">
                    <h2>{this.props.title}</h2>
                </div>

                <div className="article__card--container--bx">
                    {this.props.container}
                </div>
            </div>
        )
    }
}

export default ArticleContainer;