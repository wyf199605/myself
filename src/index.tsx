import * as React from "react";
import * as ReactDOM from "react-dom";
import "./polyfill";
import "./styles.scss";
import "./utils/index";

import { Hello } from "./components/Hello";
import tools = G.tools;

ReactDOM.render(
    <Hello name="123"/>,
    document.getElementById("app")
);

console.log(tools.isEmpty(''));