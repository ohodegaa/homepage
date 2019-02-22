import React from "react"

const Page = props => {
    return (
        <div {...props} className={"page " + props.className}>
            {props.children}
        </div>
    )
}

export default Page
