import * as React from "react";

import { UserTable } from "./components/userTable";

interface UserListProps { }

interface UserListState {
    users: IUser[];
}

export class UserList extends React.Component<UserListProps, UserListState> {
    private startTime = 0;
    private endTime = 0;

    constructor(props) {
        super(props);
        this.addUsers = this.addUsers.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.setState({
            users: []
        });
    }

    componentDidUpdate() {
        this.endTime = performance.now();
        let timeSpent = this.endTime - this.startTime; 
        console.debug(timeSpent + " ms.");
    }

    private addUsers(): void {
        this.startTime = performance.now();
        this.setState({
            users: mockUsers
        });
    }

    private clearUsers(): void {
        this.startTime = performance.now();
        this.setState({
            users: []
        });
    }

    render(): JSX.Element {
        return (
            <div>
                <h2>This is the list of our registered users:</h2>
                <UserTable users={this.state.users} onUserAddition={this.addUsers} onUserClearance={this.clearUsers}/>
            </div>
        );
    }
}