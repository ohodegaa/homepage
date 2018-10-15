import React from "react"
import Typography from "@material-ui/core/Typography"
import { connect } from "react-redux"


class Home extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <div>
                <Typography variant="headline">Hello world!</Typography>
            </div>
        )
    }
}

const mapStateToProps = state => {}

export default connect(
    mapStateToProps,
    {},
)(Home)
