import {observable, action} from 'mobx';

class Article {
    @observable
    article = {
        title: '',
        introduce: '',
        content: ''
    }
    articleList = ''

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
    /**
     *  设置文章列表
     * **/
    @action setArticleList(articleList) {
        this.articleList = articleList
    }

    /**
     * 编辑文章，预览篇片文章数据
     * */
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

