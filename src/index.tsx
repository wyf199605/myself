import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import "./styles.scss"

ReactDOM.render(
    <Hello name="123"/>,
    document.getElementById("example"),
);