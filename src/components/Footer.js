import React from 'react'


const footerStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    backgroundColor: "black",
    color: "white",
    width: "100%",
    textAlign: "center",
    padding: "19px",
    height: "60px"
}

export default function Footer() {

    let year = new Date().getFullYear();

    return (
        <div>
            <div style={footerStyle}>
                <p>{year} - All rights are reversed!!!!</p>
            </div>
        </div>
    )
}
