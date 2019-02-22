import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import * as hei from "@material-ui/core/styles/"
import LoginForm from "../components/login/loginForm"
import Page from "./page"
import { flex, column, center, cover, overlay, url, rgba } from "../styles/utils"

console.log(hei)

const timeOfYear = month => {
    if ([11, 0, 1].includes(month)) {
        return "winter"
    } else if ([2, 3, 4].includes(month)) {
        return "spring"
    } else if ([5, 6, 7].includes(month)) {
        return "summer"
    } else if ([8, 9, 10].includes(month)) {
        return "autumn"
    }
}

const styles = theme => ({
    root: {
        display: flex,
        flexDirection: column,
        justifyContent: center,
        alignItems: center,
        backgroundSize: cover,
        backgroundBlendMode: overlay,
        backgroundPosition: center,
        backgroundColor: rgba(0, 0, 0, 0.5),
        backgroundImage: url("/img/login-background/" + timeOfYear(new Date().getMonth()) + "-background.jpg"),
    },
})

const Login = props => {
    const { classes } = props
    return (
        <Page className={classes.root}>
            <LoginForm />
        </Page>
    )
}

export default withStyles(styles)(Login)
