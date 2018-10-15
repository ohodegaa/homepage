import { createMuiTheme } from "@material-ui/core/styles"
import { indigo, amber, red } from "@material-ui/core/colors"

export default createMuiTheme({
    palette: {
        type: "light",
        primary: indigo,
        secondary: amber,
        error: red,
    },
    typography: {
        headline: {
            color: "#fefefe",
        },
    },
    overrides: {
        MuiIconButton: {
            root: {
                color: "#fefefe",
            },
        },
        MuiFormGroup: {
            root: {
                marginTop: "12px",
                marginBottom: "18px",
            },
        },
        MuiToolbar: {
            gutters: {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
        MuiSnackbarContent: {
            root: {
                backgroundColor: red["700"],
            },
        },
        MuiButton: {
            root: {
                borderRadius: 1000,
            },
        },
    },
})
