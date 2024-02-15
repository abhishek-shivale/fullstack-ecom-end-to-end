import axios from 'axios';

const baseUrl = `http://localhost:4000`;

export const LoginReq =  (email:string,password:string) => {
  
return  axios.post(`${baseUrl}/api/v1/login`, {
    email,
    password
  },{
    withCredentials:true
  });

};
export const RegisterReq = async (email:string,password:string,phoneNumber:string) => {
  let value = parseInt(phoneNumber)  

  return await axios.post(`${baseUrl}/api/v1/register`, {
    email,
    password,
    phoneNumber:value
  });
    
};

