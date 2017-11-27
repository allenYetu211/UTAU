import React, {Component} from 'react';
import './style.scss';
import {
    UiVessel,
    UiTitle,
    Input,
    UiButton
} from '../UiComponents/combination'

class Tags extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tagName: ''
        }
    }

    changeTags = (e) => {
        this.setState({
            tagName: e.target.value
        })
    }
    sendTagsUpload = () => {
        console.log(this.state.tagName)
    }

    render() {
        return (
            <div className="tags__container">
                <UiTitle title="标签"/>

                <div className="tags__overall">
                    <div className="tags__overall--create">
                        <UiVessel title="新建标签">
                            <Input
                                value={this.state.tagName}
                                placeholder="新标签"
                                onChange={this.changeTags}
                            />
                            <UiButton onClick={this.sendTagsUpload}>确认</UiButton>
                        </UiVessel>
                    </div>

                    <div className="tags__overall--preview">
                        <UiVessel
                            title="所有标签"
                            theme="full">
                            <p>221312112e12</p> <p>221312112e12</p> <p>221312112e12</p>
                        </UiVessel>
                    </div>
                </div>

            </div>
        )
    }
}

export default Tags