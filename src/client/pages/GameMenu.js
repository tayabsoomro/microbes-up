import React from "react";
import { observer } from "mobx-react";
import { Route, Link , Switch } from "react-router-dom";
import { Badge, Button, ButtonGroup, Well } from "react-bootstrap";

import EntryStore from "../EntryStore";

import Game from "./Game";

@observer
export default class GameMenu extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        EntryStore.requestTags();
    }

    render() {
        const tags = EntryStore.popularTags;

        const tagLis = tags.map(t => mapTags(t));

        return (
            <div>
            <Switch>
                <Route path="/game/:id" component={ ({match}) => <Game match={match}/>} />
                <Route component={Categories} />
            </Switch>
            </div>
        );
    }
}

let mapTags = (tag) => {
    return (
        <div className="card col-md-3 m-2" style="width:200px">
            <a href={'/game/' + tag.id}>
            <img src={"../../assets/imgs/" + snakeCase(tag.text) + ".png"} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="text-center">{tag.text} ({tag.count})</h5>
            </div>
            </a>
        </div>
    );
};

const snakeCase = string => {
    return string.replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_');
};



let randomIntRange = (from, to) => {
    return Math.floor(Math.random() * (to + 1 - from)) + from;
}


class Categories extends React.Component {
    render() {
        const tags = EntryStore.popularTags;

        const tagLis = tags.map(t => mapTags(t));

        return (
            <div className="col-lg-12 categories-bg">
                <br />
                <h1>Choose a category</h1>
                <div className="col-lg-12 d-flex flex-wrap justify-content-center">
                    {tagLis}
                </div> 
            </div>
        );
    }
}