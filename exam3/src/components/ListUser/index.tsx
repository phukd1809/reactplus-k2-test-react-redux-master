import { TypeUser } from '../TypeUser/TypeUser';
import './ListUser.css'
type UserListProps = {
    UserList: TypeUser[];
    onDeleteUser:any;
    editUser:any;
};
export const ListUser: React.FC<UserListProps> = (props) => {
    return <div className="ant-list-items">
        <div className="ant-list-item-header">
            <h4 className="ant-list-item-meta-title">UserName</h4>
            <h4 className="ant-list-item-meta-description">FullName</h4>
        </div>
        {props.UserList.map((item, index) => {
            return (<div className="ant-list-item" key={index}>
                
                <div className="ant-list-item-meta">
                
                    <div className="ant-list-item-meta-content">
                        <p className="ant-list-item-meta-title">
                            <a>{item.username}</a>
                        </p>
                        <div className="ant-list-item-meta-description">
                            {item.full_name}
                        </div>
                    </div>
                    <ul className="ant-list-item-action">
                        <li>
                            <a onClick={() => props.editUser(item)}>Update</a>
                        </li>
                        <li>
                            <a onClick={() => props.onDeleteUser(item.id)}>Remove</a>
                        </li>
                    </ul>
                </div>
            </div>
            )
        })}
    </div>
}