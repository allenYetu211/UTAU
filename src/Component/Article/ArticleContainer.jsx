import React, {Component} from 'react';
// import { observer, inject } from 'mobx-react'
//
// console.log('observer===>>>', observer)
// @inject((stores) => {
//     console.log('inject ====>>>>', stores)
// })
//
// @observer
class ArticleContainer extends Component {
    // constructor(props) {
    //     super(props)
    // }

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