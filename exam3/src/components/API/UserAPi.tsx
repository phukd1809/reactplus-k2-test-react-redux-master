
import { TypeUser } from "../TypeUser/TypeUser";
import AxiosClient from "./AxiosClient";
const UserAPI = {
  getAll() {
    const url = `/users`;
    return AxiosClient.get(url);
  },
  get(id: string) {
    const url = `users${id}`;
    return AxiosClient.get(url);
  },
  add(username: TypeUser) {
    const url = `/users`;
    return AxiosClient.post(url, username);
  },
  remove(id: string){
    const url = `/users//${id}`;
    return AxiosClient.delete(url)
  },
  update(id: string,DataUser:TypeUser){
    const url = `/users/${id}`;
    return AxiosClient.put(url,DataUser )
}
};
export default UserAPI;