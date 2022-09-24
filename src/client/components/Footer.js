import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <footer style={{height: "25px"}}>
                <p style={{float: "left", 'font-size':"8px"}}>
                    Version: {UBAT_VERSION}
                </p>

                <p style={{float: "right"}}>
                </p>
            </footer>
        );
    }
}
