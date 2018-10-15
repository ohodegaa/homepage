import React from "react"
import { connect } from "react-redux"
import _ from "lodash"
import AppbarElement from "./appbarElement"

/* Material-ui */
import MuiAppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid/Grid"

class AppBar extends React.Component {
    render() {
        if (_.isEmpty(this.props.appBar)) {
            return null
        }

        let { title, left, right } = this.props.appBar

        return (
            <MuiAppBar position={"fixed"}>
                <Toolbar>
                    <Grid container spacing={24}>
                        <Grid container item xs={4} align={"center"}>
                            {left && <AppbarElement type={left.type} opts={left.options} />}
                        </Grid>
                        <Grid container item xs={4} alignItems={"center"} justify={"center"}>
                            <Typography variant={"headline"}>{title}</Typography>
                        </Grid>
                        <Grid container item xs={4} align={"center"}>
                            {right && <AppbarElement type={right.type} opts={right.options} />}
                        </Grid>
                    </Grid>
                </Toolbar>
            </MuiAppBar>
        )
    }
}

const mapStateToProps = state => {
    return {
        appBar: state.appBar,
        user: state.auth.user,
    }
}

export default connect(mapStateToProps)(AppBar)
