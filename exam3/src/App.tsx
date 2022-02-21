import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { ListUser } from "./components/ListUser/index";
import { AddUserForm } from "./components/AddUserForm";
import "antd/dist/antd.css";
import "./App.css";
import { TypeUser } from "./components/TypeUser/TypeUser";
import UserAPI from "./components/API/UserAPi";

function App() {
    const [Users, setUsers] = useState<TypeUser[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentUser, setCurrentUser] = useState<TypeUser | null>(null);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data: Users } = await UserAPI.getAll();
                setUsers(Users);
            } catch (error) {
                console.log(error);
            }
        };
        getUsers();
    }, []);
    const onHandleAddUser = async (User: TypeUser) => {
        try {
            await UserAPI.add(User);
            setUsers([...Users, User]);
        } catch (error) {
            console.log(error);
        }
    };
    const onHandleDeleteUser = async (id: string) => {
        try {
            await UserAPI.remove(id);
            const newUser = Users.filter((User) => User.id !== id);
            setUsers(newUser);
        } catch (error) {
            console.log(error);
        }
    };
    const handleEditUser = async (DataUser: TypeUser) => {
        setCurrentUser(DataUser);
        setIsModalVisible(!isModalVisible);
    };
    const handleUpdateUser = async (DataUser: TypeUser) => {
        const list = Users.map((User) => {
            if(User.id === DataUser.id) {
                return {
                    ...DataUser
                }
            }
            return User;
        })
        try {
          await UserAPI.update(DataUser.id, DataUser);
              setUsers(list);
        } catch (error) {
          console.log(error);
        }
    };
    const handleOpenModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="App">
            <h2>List User</h2>
            <div className="header-add-user">
                <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
                    Add New User
                </button>
            </div>
            <ListUser
                UserList={Users}
                onDeleteUser={onHandleDeleteUser}
                editUser={handleEditUser}
            />
            <Modal
                title="Add User"
                visible={isModalVisible}
                footer={null}
                onCancel={handleCancel}
            >
                <AddUserForm
                    onAddUser={onHandleAddUser}
                    currentUser={currentUser}
                    onEditUser={handleUpdateUser}
                    close={handleCancel}
                />
            </Modal>
        </div>
    );
}

export default App;
