import React, {Component} from 'react';

export default class Input extends Component {
    render() {
        return (
            <input
                onChange={this.props.getValue}
                className="c-input input__component"
                type="text"
                placeholder={this.props.placeholder}
            />
        )
    }
}