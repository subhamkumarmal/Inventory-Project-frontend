import React from 'react';
import {Route} from 'react-router'
import {connect} from 'react-redux';
class AuthRouteImpl extends React.Component {
    render(){
        const  {path, component} = this.props
        const routeProps = {path, component}
        return(
            <div>
                <Route {...routeProps} /> 
            </div>
        )
    }
}

export const AuthRoute = connect()(AuthRouteImpl);