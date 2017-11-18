import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {observer} from 'mobx-react';

@observer
class Counter extends Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {
        console.log('this.props', this.props)
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {

        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        return (
            <div></div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter
