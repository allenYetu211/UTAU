import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom'
import './sidebar.scss';

// 左侧面板
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class Sidebar extends Component {
    state = {
        collapsed: false,
        openKeys: ['sub'],
        routerPath: [
            {
                path: '/Article',
                txt: '所有文章'
            }, {
                path: '/Article',
                txt: '分类目录'
            }, {
                path: '/ArticleCompile',
                txt: '发布文章'
            }, {
                path: '/Tags',
                txt: '文章标签'
            }, {
                path: '/Picture',
                txt: '图片'
            }]
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    }

    linkTo(item) {
        console.log(item)
        this.context.router.push(item.key);
    }

    handleClick(item) {
        console.log(this)
        // this.context.router.push(item.key);
    }

    render() {
        return (
            <Menu
                theme="dark"
                onClick={this.handleClick}
                style={{width: '100%', height: '100vh'}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub']}
                mode="inline"
                openKeys={this.state.openKeys}
            >
                <SubMenu key="sub" title={<span><Icon type="setting"/><span>Navigation Three</span></span>}>
                    {
                        this.state.routerPath.map((e, inx) => {
                            return (
                                <Menu.Item key={inx}>
                                    <Link to={e.path}>
                                        {e.txt}
                                    </Link>
                                </Menu.Item>
                            )
                        })
                    }
                </SubMenu>
            </Menu>
        );
    }
}

export default Sidebar