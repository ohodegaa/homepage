import React from "react"
import MuiSnackBar from "@material-ui/core/Snackbar"
import { connect } from "react-redux"

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

const mapStateToProps = state => {
    let errors = []
    if (state.auth.error) {
        errors.push(state.auth.error)
    }
    return {
        errors,
    }
}

export default connect(
    mapStateToProps,
    {},
)(SnackBar)
