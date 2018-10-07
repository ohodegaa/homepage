import React from "react";


// material-ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import axios from "axios";

class Addresses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            error: false,
            message: "",
            data: {}
        }
    }

    componentDidMount() {
        let token = localStorage.getItem("token")
        axios.get(window.API_URL + "/api/addresses", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }

    render() {
        return (
        this.state.data.headers ?
            <div>
                <TextField
                    id="name"
                    label="Search"
                    placeholder="Search for an address"
                    value={this.state.query}
                    onChange={e => this.setState({query: e.target.value})}
                    margin="normal"
                />



                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {this.state.data.headers.map((key, i) => {
                                        return <TableCell key={i}>{key}</TableCell>
                                    })}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.data.addresses.filter(address => address.ADRESSENAVN ? address.ADRESSENAVN.includes(this.state.query) : false).map(address => {
                                    return (
                                        <TableRow key={address._id}>
                                            {Object.values(address).map((val, i) => {
                                                return <TableCell key={i}>{val}</TableCell>
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
            </div>
            :
            <div>
                No data available!
            </div>
        )
    }
}

export default Addresses;