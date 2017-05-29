import * as React from "react";

import { IUser } from "../../../interface/user";
import { UserRow } from "./components/userRow";

interface UserTableProps {
    users: IUser[];

    onUserAddition(): void;
    onUserClearance(): void;
}

interface UserTableState { }

export class UserTable extends React.Component<UserTableProps, UserTableState> {
    private startTime = 0;
    private endTime = 0;

    constructor(props) {
        super(props);

        this.handleUserAddition = this.handleUserAddition.bind(this);
        this.handleUserClearance = this.handleUserClearance.bind(this);
    }

    private handleUserAddition(): void {
        this.props.onUserAddition();
    }

    private handleUserClearance(): void {
        this.props.onUserClearance();
    }

    private getUserRows(): JSX.Element[] {
        return this.props.users.map(mockUser => {
            return (<UserRow user={mockUser} key={mockUser.id} />);
        })
    }

    render(): JSX.Element {
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
                            <button type="button" onClick={this.handleUserAddition}>Add sample users</button>
                            <button type="button" onClick={this.handleUserClearance}>Clear sample users</button>
                        </td>
                    </tr>
                    {this.getUserRows()}
                </tbody>
            </table>
        );
    }
}