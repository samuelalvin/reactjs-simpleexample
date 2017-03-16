/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { UserList } from "./userList";

interface AppProps { }

interface AppState { }

export class App extends React.Component<AppProps, AppState> {
    render(): JSX.Element {
        return (
            <div>
                <h1>Hello World!</h1>
                <UserList />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);