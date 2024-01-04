import User from "./User";
import axios from "axios";
class UserService{

  constructor()
  {
    this.usersList = [];
  }


  validateEmail(email)
  {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }


  validatePassword(password)
  {
    return String(password)
    .toLowerCase()
    .match(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    );
  }
   
  addUser(user)
  {

    // validating user credential 

    if (!this.validateEmail(user.email) || !this.validatePassword(user.pass))
    {
      alert("Invalid Email or password formate !!, read the constraints for a valid value for password");   
    }

    // if valid then storing them to the userList Array 
    this.usersList.push(new User(user.email,user.password));
    //console.log("Adding user: " + JSON.stringify(user));  

    console.log(this.usersList);
    
  }
   
  getAllProducts(){
    //return this.prodarr;
   // return axios.get(baseUrl);
   let list =axios.get("http://localhost:8282/app/v1/product");
   let users = list.map((u)=>new User(u.pname,"pass"));
   return users;
}
insertProduct(user){
    console.log("in service add")
   //this.prodarr.push(product);
   //console.log(this.prodarr);
   user = new User(user.email,user.password);
   return axios.post("http://localhost:8282/app/v1/product",{pid:user.id,pname:user.email,qty:0,price:0});//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
}
  

  getAllUser()
  {
    return this.usersList;
  }


  deleteUser(id)
  {
    this.usersList = this.usersList.filter((u)=>u.id!==id);
  }

  updateUser(user)
  {
    let idx =this.usersList.findIndex((usr)=>usr.id===user.id);
    if (idx>0)
    {
      this.usersList[idx].email=user.email;
      this.usersList[idx].password=user.password;
    }
  }


}


export default new UserService();