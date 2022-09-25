import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Well } from "react-bootstrap";

export default class MainMenu extends React.Component {
    render () {
        return (
            <div className="mu-main col-lg-12 border-black">
                <img src="assets/imgs/microbes-on-the-mind-splash.gif" width="500" />
                <br />           
                <a href="game">
                    <img className="play-btn" src="assets/imgs/play.png"></img>
                </a>
            </div>
        );
    }
}
