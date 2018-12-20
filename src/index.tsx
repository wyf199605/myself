import * as React from "react";
import * as ReactDOM from "react-dom";
import "./polyfill";
import "./styles.scss";

import { Hello } from "./components/Hello";
import {Board} from "./components/Board/Board";

ReactDOM.render(
    <Hello name="123"/>,
    document.getElementById("app")
);

ReactDOM.render(
    <Board/>,
    document.getElementById("app")
);