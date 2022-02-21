import React, { useState } from 'react'
import { TypeUser } from "../TypeUser/TypeUser";
import { v4 as uuidv4 } from "uuid";

export const AddUserForm = ({ onAddUser, onEditUser, currentUser ,close }: any) => {
    const [inputName, setInputName] = useState(currentUser?.username || "");
    const [inputContent, setInputContent] = useState(currentUser?.full_name || "")
    const onHandleSubmit = (e: any) => {
        if(currentUser && onEditUser) {
            e.preventDefault();
            onEditUser({id: currentUser.id, username: inputName, full_name: inputContent });
            close();
        } else if(onAddUser) {
            e.preventDefault();
            onAddUser({id: uuidv4(), username: inputName, full_name: inputContent })
            setInputName("");
            setInputContent("");
            close();
        }        
    }

    const onHandleChange = (e: any) => {
        setInputName(e.target.value)
    }
    const onHandleChangeContent = (e: any) => {
        setInputContent(e.target.value)
    }
    return <form action="" onSubmit={(e) => onHandleSubmit(e)}>
        <div>
            <div className="field-input-group">
                <input required placeholder="UserName" value={inputName} type="text" className="ant-input" onChange={(e) => onHandleChange(e)} />
            </div>
            <div className="field-input-group">
                <input required placeholder="FullName" value={inputContent} type="text" className="ant-input" onChange={(e) => onHandleChangeContent(e)} />
            </div>
            <div className="modal-new-user-footer">
                <button className="ant-btn ant-btn-primary" type="submit">
                    Save
                </button>
                <button className="ant-btn" style={{ marginLeft: 10 }} >
                    Cancel
                </button>
            </div>
        </div>
    </form>
}
