import axios from "axios";


const API_URL="http://localhost/api/"

const register=(name,surname,email,login,password,phone_number)=>{
    return axios.post(API_URL+"save",{
        name,
        surname,
        email,
        login,
        password,
        phone_number
    })
}
const saveObject = (address,distinct,rooms,square,real_estate,sum,currency,type_of_order_of_real_estate) => {
    const customer=JSON.parse(localStorage.getItem("customer"));
  return axios.post(API_URL+customer.id+"/addObject",{
      address,
      distinct,
      rooms,
      square,
      real_estate,
      sum,
      currency,
      type_of_order_of_real_estate
  })
}

const saveObjectV2 = (object,img) => {
    const customer=JSON.parse(localStorage.getItem("customer"));
    return axios.post(API_URL+customer.id+"/addObject",{
        object,
        img
    })
}

const login=(login,password)=>{
    return axios.post(API_URL+"login",{
        login,
        password
    })
        .then((response)=>{
            if(response.headers.authorization){
                // console.log(response.headers)
                // console.log(response.data)
                localStorage.setItem("customer",JSON.stringify(response.data))
            }
            return response.data;
        });
};

const logout = () => {
  localStorage.removeItem("customer");
}

const getCurrentUser=()=>{
    return JSON.parse(localStorage.getItem("customer"));
}

const AuthService={
    register,
    login,
    logout,
    getCurrentUser,
    saveObject,
    saveObjectV2
}
export default AuthService;