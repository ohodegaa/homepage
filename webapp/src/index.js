import "dotenv/config"
import React from "react"
import ReactDOM from "react-dom"
import "./App.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/index"
import { MuiThemeProvider } from "@material-ui/core/styles"
import theme from "./styles/themes/defaultTheme"
import CssBaseline from "@material-ui/core/CssBaseline"


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CssBaseline>
        </MuiThemeProvider>
    </Provider>,

    document.getElementById("root"),
)
registerServiceWorker()
