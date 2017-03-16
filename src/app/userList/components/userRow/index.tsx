import * as React from "react";

import { IUser } from "../../../data/user/interface";

interface UserRowProps {
    user: IUser;

    onUserDeletion(key: number): void;
}

interface UserRowState { }

export class UserRow extends React.Component<UserRowProps, UserRowState> {
    handleUserDeletion(key: number): void {
        this.props.onUserDeletion(key);
    }

    render(): JSX.Element {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.age}</td>
                <td>
                    <button onClick={(e) => this.handleUserDeletion(this.props.user.id)}>Delete</button>
                </td>
            </tr>
        );
    }
}