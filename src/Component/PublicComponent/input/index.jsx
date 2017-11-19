import React, {Component} from 'react';

export default class Input extends Component {
    render() {
        return (
            <input
                onChange={this.props.getValue}
                className="c-input input__component"
                type="text"
                value={this.props.val}
                placeholder={this.props.placeholder}
            />
        )
    }
}