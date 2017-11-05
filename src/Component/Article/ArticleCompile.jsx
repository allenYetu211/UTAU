import React, {Component} from 'react';
import axios from '../../Public/js/axios'
class ArticleCompile extends Component {
    // constructor(props) {
    //     super(props)
    // }
    async componentWillMount () {
        console.log(this.props.match.params.id)
        const data = await axios.ajax('article/articleCompile',{
            id: this.props.match.params.id
        }, 'post')
        console.log(data)
    }
    render() {
        return(
            <div>
                tes
            </div>
        )
    }
}

export default ArticleCompile;