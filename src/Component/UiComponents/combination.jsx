import React from 'react'
import './style.scss'
// 输入框
export const Input = () => ({
    render() {
        return (
            <div>
                <input
                    onChange={this.props.onChange}
                    className="c-input input__component"
                    type="text"
                    value={this.props.val}
                    placeholder={this.props.placeholder}
                />
            </div>
        )
    }
})
// title
export const UiTitle = () => ({
    render() {
        return (
            <div className="ui__title">
                <h2>{this.props.title}</h2>
            </div>
        )
    }
})

// 外壳
export const UiVessel = () => ({
    render() {
        const UiTheme = this.props.theme === 'full' ? 'ui__vessel ui__vessel--full' : 'ui__vessel'
        return (
            <div className={UiTheme}>
                <UiTitle title={this.props.title}/>
                <div className="ui__vessel--full-trans">
                    {this.props.children}
                </div>
            </div>
        )
    }
})

export const UiButton = () => ({
    render() {
        return (
            <button
                    onClick={this.props.onClick}
                    className="ui__button">
                {this.props.children}
            </button>
        )
    }
})