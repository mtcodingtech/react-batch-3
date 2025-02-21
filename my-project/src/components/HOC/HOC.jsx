import React from 'react'

export const withBackground = (WrappedComponent) => {
    return (props) => {
        return (
            <div style={{background: "blue", color: "#fff", padding: "1rem"}}>
                <WrappedComponent />
            </div>
        )
    }
}

const HelloWorld = () => {
    return(
        <h1>Hello World</h1>
    )
}
const HOC = withBackground(HelloWorld);
export default HOC;


