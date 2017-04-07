import * as React from "react";

import { IUser } from "../../../interface/user";

interface UserRowProps {
    user: IUser;

    onUserDeletion(key: number): void;
    onUserEdit(updatedUser: IUser): void;
}

interface UserRowState {
    updatedUser?: IUser;
    editMode?: boolean;
}

export class UserRow extends React.Component<UserRowProps, UserRowState> {
    constructor(props) {
        super(props);
        
        this.handleUserEdit = this.handleUserEdit.bind(this);
        this.enableEditMode = this.enableEditMode.bind(this);
        this.disableEditMode = this.disableEditMode.bind(this);
        this.onUserInformationChanges = this.onUserInformationChanges.bind(this);
        this.state = {
            updatedUser: Object.assign({} as IUser, this.props.user),
            editMode: false
        };
    }

    private handleUserDeletion(key: number): void {
        this.props.onUserDeletion(key);
    }

    private handleUserEdit(): void {
        let isNameValid = this.state.updatedUser.name.length > 0;
        let isAgeValid = this.state.updatedUser.age > 0;
        if (isNameValid === false || isAgeValid === false) {
            alert("Updated User information is invalid");
            return;
        }

        this.props.onUserEdit(this.state.updatedUser);
        this.disableEditMode();
    }

    private onUserInformationChanges(event: React.FormEvent): void {
        const target = event.target as React.HTMLAttributes;
        let updatedUser = this.state.updatedUser;
        updatedUser[target.name] = target.value;
        this.setState({
            updatedUser: updatedUser
        });
    }

    private enableEditMode(): void {
        this.setState({
            updatedUser: Object.assign({} as IUser, this.props.user),
            editMode: true
        });
    }

    private disableEditMode(): void {
        this.setState({
            editMode: false
        });
    }

    render(): JSX.Element {
        if (this.state.editMode) {
            return (
                <tr>
                    <td>{this.props.user.id}</td>
                    <td>
                        <input name="name" type="text" value={this.state.updatedUser.name} onChange={this.onUserInformationChanges} />
                    </td>
                    <td>
                        <input name="age" type="number" value={this.state.updatedUser.age.toString()} onChange={this.onUserInformationChanges} />
                    </td>
                    <td>
                        <button onClick={this.handleUserEdit}>Save</button>
                        <button onClick={this.disableEditMode}>Cancel</button>
                    </td>
                </tr>
            );
        };

        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.age}</td>
                <td>
                    <button onClick={this.enableEditMode}>Edit</button>
                    <button onClick={(e) => this.handleUserDeletion(this.props.user.id)}>Delete</button>
                </td>
            </tr>
        );
    }
}