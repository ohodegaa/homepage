import { Redirect, Route } from "react-router-dom"
import _ from "lodash"
import React from "react"
import { connect } from "react-redux"

class PrivateRoute extends React.Component {
    render() {
        const { component, ...rest } = { ...this.props }

        return this.props.isAuthenticated ? (
            <Route {...this.props} />
        ) : (
            <Route
                {...rest}
                render={props => (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location },
                        }}
                    />
                )}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: !_.isEmpty(state.profile),
    }
}

export default connect(mapStateToProps)(PrivateRoute)
