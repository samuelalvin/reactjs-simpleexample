import * as React from "react";

import { IUser } from "../../../interface/user";
import { mockUsers } from "../../../mockData/user";
import { UserRow } from "../userRow";

interface UserTableProps { }

interface UserTableState {
    users: IUser[];
}

export class UserTable extends React.Component<UserTableProps, UserTableState> {
    private userRows: JSX.Element[];
    private startTime = 0;
    private endTime = 0;

    constructor(props) {
        super(props);
        this.addUsers = this.addUsers.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.state = {
            users: []
        };
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

    private getUserRows(): void {
        this.userRows = this.state.users.map(mockUser => {
            return (<UserRow user={mockUser} key={mockUser.id} />);
        })
    }

    render(): JSX.Element {
        this.getUserRows();

        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={3}>
                            <button type="button" onClick={this.addUsers}>Add sample users</button>
                            <button type="button" onClick={this.clearUsers}>Clear sample users</button>
                        </td>
                    </tr>
                    {this.userRows}
                </tbody>
            </table>
        );
    }
}