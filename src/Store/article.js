import {observable, action} from 'mobx';

class Article {
    @observable
    article = {
        title: '',
        introduce: '',
        content: ''
    }
    tick = 0

    @action.bound
    increment() {
        this.tick++
    }

    @action.bound
    setTitle(title) {
        this.article.title = title
    }

    @action.bound
    setIntroduce(introduce) {
        this.article.introduce = introduce
    }

    @action.bound
    setContent(content) {
        this.article.content = content
    }

    @action articleData = () => {
        return {
            title: this.article.title,
            introduce: this.article.introduce,
            content: this.article.content,
        }
    }
}

const article = new Article()

export default article;

