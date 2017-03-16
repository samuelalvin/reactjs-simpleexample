import * as React from "react";

import { UserTable } from "./components/userTable";

interface UserListProps { }

interface UserListState { }

export class UserList extends React.Component<UserListProps, UserListState> {
    render(): JSX.Element {
        return (
            <div>
                <h2>This is the list of our registered users:</h2>
                <UserTable />
            </div>
        );
    }
}