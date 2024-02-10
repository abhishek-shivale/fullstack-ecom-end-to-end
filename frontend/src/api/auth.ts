import axios from 'axios';

const baseUrl = `http://localhost:4000`;

export const LoginReq = async (email:string,password:string) => {
    try {
      return await axios.post(`${baseUrl}/api/v1/login`, {
          email,
          password
        });
      } catch (error) {
        return error
      }
};
export const RegisterReq = async (email:string,password:string,phoneNumber:number) => {
    try {
       return await axios.post(`${baseUrl}/api/v1/register`, {
          email,
          password,
          phoneNumber
        });
      } catch (error) {
        return error
      }
};

