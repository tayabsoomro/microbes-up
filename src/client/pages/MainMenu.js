import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Well } from "react-bootstrap";

export default class MainMenu extends React.Component {
    render () {
        return (
            <div className="mu-main col-lg-12 border-black">
                <img src="https://m.tetl.ca/assets/imgs/microbes-up-splash-once.gif" width="500" />
                <br />           
                <button onClick={() => window.location.href = 'https://m.tetl.ca/game'} className="btn btn-primary btn-lg" style={{alignSelf: "stretch"}}>Play</button>
            </div>
        );
    }
}
