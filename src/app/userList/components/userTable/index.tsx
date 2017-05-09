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

    constructor(props) {
        super(props);
        this.state = {
            users: mockUsers
        };
    };

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
                    {this.userRows}
                </tbody>
            </table>
        );
    }
}