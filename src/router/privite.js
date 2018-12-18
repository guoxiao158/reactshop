import React from 'react'; 
import {Redirect,Route} from 'react-router-dom';
//  路由权限保护组件
// 使用方法   在路由页面引入  import {PrivateRoute} from './privite';
// 在路由页面把Router  变成 PrivateRoute

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Boolean(sessionStorage['isLogin']) ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);
export {
	PrivateRoute
}
