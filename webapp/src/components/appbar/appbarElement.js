import React from "react";
import PropTypes from "prop-types";

/* Material ui */
import IconButton from "@material-ui/core/IconButton";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import CloseIcon from "@material-ui/icons/Close";

class AppbarElement extends React.Component {
    _renderIcon = type => {
        switch (type) {
            case "back":
                return <ArrowLeft />;
            case "close":
                return <CloseIcon />;
            default:
                return null;
        }
    };

    render() {
        return (
            <IconButton onClick={this.props.opts.redirect} color={"textPrimary"}>
                {this._renderIcon(this.props.type)}
            </IconButton>
        );
    }
}

AppbarElement.propTypes = {
    type: PropTypes.string.isRequired,
    opts: PropTypes.object,
}

export default AppbarElement;
