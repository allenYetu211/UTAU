import React, {Component} from 'react';

export default class Textarea extends Component {
    render() {
        return (
            <textarea
                onChange={this.props.getValue}
                className="c-input c-textarea textarea__component"
                type="text"
                value={this.props.val}
                placeholder={this.props.placeholder}
            />
        )
    }
}