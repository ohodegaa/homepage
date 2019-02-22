import React from "react"
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment"
import TextField from "@material-ui/core/TextField"


const Form = props => {
    const { classes } = props
    return (
        <form className="form">
            {props.inputFields &&
                props.inputFields.map(field => (
                    <TextField
                        required={field.required}
                        fullwidth={true}
                        label={field.label || null}
                        placeholder={field.placeholder}
                        name={field.name}
                        type={field.type || "text"}
                        onChange={props.onChange}
                        InputProps={{
                            startAdornment: <InputAdornment position={"start"}>{field.startAdornment}</InputAdornment>,
                        }}
                    />
                ))}
        </form>
    )
}

export default Form
