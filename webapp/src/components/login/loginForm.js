import React from "react"
import Paper from "./paper"
import Form from "../form"
import Typography from "@material-ui/core/Typography"
import AccountCircle from "@material-ui/icons/AccountCircle"
import VpnKey from "@material-ui/icons/VpnKey"

const loginFields = [
    {
        label: "Username",
        name: "username",
        startAdornment: <AccountCircle />,
        required: true,
    },
    {
        label: "Password",
        name: "password",
        startAdornment: <VpnKey />,
        required: true,
    },
]

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogin: true,
            userData: {},
        }
    }

    onChange = e => {
        this.setState({
            userData: {
                ...this.state.userData,
                [e.target.name]: e.target.value,
            },
        })
    }

    switchForm = () => {
        console.log("switch")
    }

    submitLogin = () => {
        console.log("login")
    }

    submitRegister = () => {
        console.log("register")
    }

    render() {
        return (
            <div className="login-paper">
                <Typography color={"textPrimary"} align={"center"} gutterBottom={true} variant={"title"}>
                    Login
                </Typography>
                <Form inputFields={loginFields} onChange={this.onChange} />

            </div>
        )
    }
}

export default LoginForm
