import React from "react"
import MuiSnackBar from "@material-ui/core/Snackbar"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core"

class SnackBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
        }
    }

    componentWillReceiveProps() {
        this.setState({ open: true })
    }

    render() {
        if (this.props.errors && this.props.errors.length > 0) {
            return (
                <div>
                    {this.props.errors.map((err, i) => (
                        <MuiSnackBar
                            ContentProps={{
                                classes: {
                                    root: {
                                        background: "#f00",
                                    },
                                },
                            }}
                            key={i}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            transitionDuration={300}
                            autoHideDuration={10000}
                            open={this.state.open}
                            onClose={() => this.setState({ open: false })}
                            message={err.message + " - " + err.description}
                        />
                    ))}
                </div>
            )
        } else {
            return null
        }
    }
}

const styles = theme => ({
    info: {
        backgroundColor: theme.palette.error,
    },
})

const mapStateToProps = state => {
    let messages = []
    Object.keys(state).map(key => {
        if (state[key].messages) {
            messages = [...messages, state[key].messages]
        }
    })
    return { messages }
}

export default connect(
    mapStateToProps,
    {},
)(withStyles(styles)(SnackBar))
