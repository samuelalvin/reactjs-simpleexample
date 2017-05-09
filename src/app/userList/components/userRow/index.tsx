import * as React from "react";

import { IUser } from "../../../interface/user";

interface UserRowProps {
    user: IUser;
}

interface UserRowState { }

export class UserRow extends React.Component<UserRowProps, UserRowState> {
    render(): JSX.Element {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.age}</td>
            </tr>
        );
    }
}