import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import axios from "axios"
import PropTypes from "prop-types"
import Login from "./components/login"
import Register from "./components/register"
import AppBar from "./components/appbar"
import Home from "./components/home"
import { connect } from "react-redux"
import SnackBar from "./components/snackBar"
import { withRouter } from "react-router"
import { authenticate } from "./store/actions/auth"
import _ from "lodash"
import { Service } from "axios-middleware"
import { getToken } from "./utils/localStorage"

axios.defaults.headers.common["Content-Type"] = "application/json"
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
let token
if ((token = getToken())) {
    axios.defaults.headers.common["Authorization"] = token
}

const service = new Service(axios)

service.register({
    onResponse: res => {
        return JSON.parse(res.data)
    },
    onResponseError: err => {
        if (err.response === undefined) {
            throw {
                error: {
                    message: "Network error",
                    description: "Could not connect to api",
                },
            }
        } else {
            throw { ...err.response.data }
        }
    },
})

class App extends Component {
    componentDidMount() {
        this.props.authenticate()
    }

    render() {
        return (
            <div
                className={
                    "App-wrapper" +
                    (_.isEmpty(this.props.appbar) ? " appbar-disabled" : "")
                }
            >
                <SnackBar />
                <AppBar />
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </div>
            </div>
        )
    }
}

App.propTypes = {
    authenticate: PropTypes.func.isRequired,
    appbar: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        appbar: state.appbar,
        user: state.auth.user,
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        { authenticate },
    )(App),
)
