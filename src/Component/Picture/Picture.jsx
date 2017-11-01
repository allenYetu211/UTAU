import React, {Component} from 'react';
import PictureDragUpData from './PictureDragUpData'
import './picture.scss';

class Picture extends Component {
    render() {
        return (
            <div className="picture__content">
                <PictureDragUpData/>
            </div>
        )
    }
}

export default Picture;