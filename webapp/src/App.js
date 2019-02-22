import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import axios from "axios"
import Login from "./pages/login"
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
    console.log(token)
    axios.defaults.headers.common["Authorization"] = token
}

const service = new Service(axios)

service.register({
    onResponse: res => {
        return JSON.parse(res.data)
    },
    onResponseError: err => {
        if (err.response === undefined) {
            return Promise.reject({
                messages: [
                    {
                        type: "error",
                        message: "Network error",
                        description: "Unable to connect to server",
                    },
                ],
            })
        }
        let data = JSON.parse(err.response.data)
        return Promise.reject({ ...data })
    },
})

class App extends Component {
    componentDidMount() {
        this.props.authenticate()
    }

    render() {
        return (
            <div className={"App-wrapper" + (_.isEmpty(this.props.appbar) ? " appbar-disabled" : "")}>
                <SnackBar />
                <AppBar />
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        appbar: state.appbar,
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        { authenticate },
    )(App),
)
