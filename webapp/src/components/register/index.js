import React from "react"
import { connect } from "react-redux"
import { register } from "../../store/actions/auth"

/* material ui */
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import AccountCircle from "@material-ui/icons/AccountCircle"
import VpnKey from "@material-ui/icons/VpnKey"
import Button from "@material-ui/core/Button"

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            name: "",
            mail: "",
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div className="login">
                <FormControl>
                    <TextField
                        label={"Brukernavn"}
                        name={"username"}
                        value={this.state.username}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position={"start"}>
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        onChange={this.onChange}
                    />
                    <TextField
                        label={"Passord"}
                        name={"password"}
                        type={"password"}
                        value={this.state.password}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position={"start"}>
                                    <VpnKey />
                                </InputAdornment>
                            ),
                        }}
                        onChange={this.onChange}
                    />
                    <TextField
                        label={"Navn"}
                        name={"name"}
                        value={this.state.name}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position={"start"}>
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        onChange={this.onChange}
                    />
                    <TextField
                        label={"Mail"}
                        name={"mail"}
                        value={this.state.mail}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position={"start"}>
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        onChange={this.onChange}
                    />

                    <Button
                        variant={"fab"}
                        onClick={() => {
                            this.props.register(this.state)
                        }}
                    >
                        Logg inn
                    </Button>
                </FormControl>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        redux: state,
    }
}

export default connect(
    mapStateToProps,
    { register },
)(Register)
