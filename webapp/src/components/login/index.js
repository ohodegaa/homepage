import React from "react"
import { connect } from "react-redux"
import { login } from "../../store/actions/auth"
import { setTitle, setLeft } from "../../store/actions/appBar"
import { Redirect } from "react-router-dom"
import PropTypes from "prop-types"

/* material ui */
import InputAdornment from "@material-ui/core/InputAdornment"
import FormGroup from "@material-ui/core/FormGroup"
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import AccountCircle from "@material-ui/icons/AccountCircle"
import VpnKey from "@material-ui/icons/VpnKey"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import AppbarElement from "../appbar/appbarElement"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            redirect: false,
        }
    }

    componentDidMount() {
        this.props.setTitle("Logg inn")
        this.props.setLeft("back", {
            redirect: () => this.setState({ redirect: true }),
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={"/"} />
        }
        if (this.props.user) {
            return <Redirect to={"/"} />
        }
        return (
            <div className="login-container">
                <Typography variant={"title"}>Logg inn</Typography>

                <FormGroup>
                    <FormControl margin={"normal"}>
                        <TextField
                            required
                            label={"Brukernavn"}
                            name={"username"}
                            value={this.state.username}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position={"start"}>
                                        <AccountCircle color={"secondary"} />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={this.onChange}
                        />
                    </FormControl>
                    <FormControl margin={"normal"}>
                        <TextField
                            required
                            label={"Passord"}
                            name={"password"}
                            type="password"
                            value={this.state.password}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position={"start"}>
                                        <VpnKey color={"secondary"} />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={this.onChange}
                        />
                    </FormControl>
                </FormGroup>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={() => {
                        this.props.login(this.state)
                    }}
                    disabled={this.state.username.length <= 0 || this.state.password.length <= 0}
                >
                    Logg inn
                </Button>
            </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    setLeft: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

export default connect(
    mapStateToProps,
    { setTitle, setLeft, login },
)(Login)