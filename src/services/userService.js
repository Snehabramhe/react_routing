import axios from 'axios';

export class UserService{
    static url = 'https://jsonplaceholder.typicode.com/users';

    static getAllUsers(){
        return axios.get(this.url);
    }
    static getUser(userId){
        return axios.get(`${this.url}/${userId}`);
    }
}