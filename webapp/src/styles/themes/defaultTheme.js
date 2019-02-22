import { createMuiTheme } from "@material-ui/core/styles"
import { indigo, amber, red, lightBlue, teal } from "@material-ui/core/colors"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1EB980",
        },
        secondary: {
            main: "#ec5381",
        },
        error: red,
    },
})

console.log(theme)

export default theme
