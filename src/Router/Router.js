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
import Tags from '../Component/Tags/Tags';


const Routes = [
    {
        path: '/',
        exact: true,
        component: Article
    },
    {
        path: '/Article',
        component:Article
    },
    {
        path: '/Picture',
        component: Picture
    },
    {
        path: '/ArticleCompile',
        component:ArticleCompile
    },
    {
        path: '/ArticleModification/:id',
        component:ArticleCompile
    },
    {
        path: '/ArticleMarkDown',
        component: ArticleMarkDown
    },
    {
        path: '/Tags',
        component: Tags
    }
]


export default Routes;