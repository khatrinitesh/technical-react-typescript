import axios from 'axios';
import { User } from './types';


// Define the base URL for your API
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async():Promise<User[]> => {
    const response = await axios.get<User[]>(`${BASE_URL}/users`);
    return response.data;
}