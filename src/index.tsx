import * as React from "react";
import * as ReactDOM from "react-dom";
import "./polyfill";
import "./styles.scss";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello name="123"/>,
    document.getElementById("app")
);