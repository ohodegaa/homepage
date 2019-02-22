import React from "react"

import MuiPaper from "@material-ui/core/Paper"
import withStyles from "@material-ui/core/styles/withStyles"

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
        padding: 32,
        minHeight: 450,
        width: 360,
        minWidth: 320,
        "@media (max-width: 400px)": {
            width: "90%",
        },
        transitionProperty: "transform",
        transitionDuration: "1s",
    },
})

const Paper = props => {
    const { classes } = props
    return <MuiPaper className="login-paper">{props.children}</MuiPaper>
}

export default withStyles(styles)(Paper)
