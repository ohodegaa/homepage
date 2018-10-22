import React from "react"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { setTitle } from "../../store/actions/appBar"

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <Card className={"login-card"}>
                    <CardContent>
                        <Button variant={"outlined"}>Logg inn</Button>
                        <Button variant={"outlined"}>Registrer</Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default connect(
    null,
    { setTitle },
)(Home)
