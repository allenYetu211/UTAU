// import React, {Component} from 'react';
// import {Router, Route, IndexRoute} from 'react-router';
// import {
//     BrowserRouter as Router,
//     Route
// } from 'react-router-dom';
// import Subject from '../Component/Subject/Subject';
import Article from '../Component/Article/Article';
import ArticleCompile from '../Component/Article/ArticleCompile';
import ArticleMarkDown from '../Component/Article/ArticleMarkDown';
import Picture from '../Component/Picture/Picture';


const Routes = [
    {
        path: '/',
        exact: true,
        main: Article
    },
    {
        path: '/Article',
        main: Article
    },
    {
        path: '/Picture',
        main: Picture
    },
    {
        path: '/ArticleCompile',
        main: ArticleCompile
    },
    {
        path: '/ArticleCompile/:id',
        main: ArticleCompile
    },
    {
        path: '/ArticleMarkDown',
        main: ArticleMarkDown
    }
]


export default Routes;