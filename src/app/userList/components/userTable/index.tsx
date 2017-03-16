import * as React from "react";

import { IUser } from "../../../data/user/interface";
import { mockUsers } from "../../../data/user/mock";
import { UserRow } from "../userRow";

interface UserTableProps { }

interface UserTableState {
    users: IUser[];
}

export class UserTable extends React.Component<UserTableProps, UserTableState> {
    private userRows: JSX.Element[];

    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this);
        this.state = {
            users: mockUsers
        };
    };

    deleteUser(key: number) {
        let userIndex = this.state.users.findIndex(user => user.id === key);
        let updatedUsers = this.state.users;
        updatedUsers.splice(userIndex, 1);
        this.setState({
            users: updatedUsers
        });
    }

    getUserRows(): void {
        this.userRows = this.state.users.map(mockUser => {
            return (<UserRow user={mockUser} onUserDeletion={this.deleteUser} key={mockUser.id} />);
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.userRows }
                </tbody>
            </table>
        );
    }
}