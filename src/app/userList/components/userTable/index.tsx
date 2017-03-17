import * as React from "react";

import { IUser } from "../../../data/user/interface";
import { mockUsers } from "../../../data/user/mock";
import { UserRow } from "../userRow";

interface UserTableProps { }

interface UserTableState {
    users?: IUser[];
    newUser?: IUser;
}

export class UserTable extends React.Component<UserTableProps, UserTableState> {
    private userRows: JSX.Element[];

    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.onNewUserInformationChanges = this.onNewUserInformationChanges.bind(this);
        this.state = {
            users: mockUsers,
            newUser: {
                id: 0,
                name: "",
                age: 0
            } as IUser
        };
    };

    private deleteUser(key: number): void {
        let userIndex = this.state.users.findIndex(user => user.id === key);
        let updatedUsers = this.state.users;
        updatedUsers.splice(userIndex, 1);
        this.setState({
            users: updatedUsers
        });
    }

    private editUser(updatedUser: IUser): void {
        let updatedUsers = this.state.users;
        let updatedUserIndex = updatedUsers.findIndex(user => user.id == updatedUser.id);
        updatedUsers.splice(updatedUserIndex, 1, updatedUser);
        this.setState({
            users: updatedUsers
        });
    }

    private addUser(): void {
        let isIdValid = this.state.newUser.id > 0 && this.state.users.find(user => user.id == this.state.newUser.id) === undefined;
        let isNameValid = this.state.newUser.name.length > 0;
        let isAgeValid = this.state.newUser.age > 0;
        if (isIdValid === false || isNameValid === false || isAgeValid === false) {
            alert("New User information is invalid");
            return;
        }

        let newUser = this.state.newUser;
        let updatedUsers = this.state.users;
        updatedUsers.push(newUser);
        this.setState({
            users: updatedUsers,
            newUser: {
                id: 0,
                name: "",
                age: 0
            } as IUser
        });
    }

    private onNewUserInformationChanges(event: React.FormEvent): void {
        const target = event.target as React.HTMLAttributes;
        let newUser = this.state.newUser;
        newUser[target.name] = target.value;
        this.setState({
            newUser: newUser 
        });
    }

    private getUserRows(): void {
        this.userRows = this.state.users.map(mockUser => {
            return (<UserRow user={mockUser} onUserDeletion={this.deleteUser} onUserEdit={this.editUser} key={mockUser.id} />);
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
                    {this.userRows}
                    <tr>
                        <td>
                            <input name="id" type="number" value={this.state.newUser.id.toString()} onChange={this.onNewUserInformationChanges} />
                        </td>
                        <td>
                            <input name="name" type="text" value={this.state.newUser.name} onChange={this.onNewUserInformationChanges} />
                        </td>
                        <td>
                            <input name="age" type="number" value={this.state.newUser.age.toString()} onChange={this.onNewUserInformationChanges} />
                        </td>
                        <td>
                            <button onClick={this.addUser}>Add a User</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}