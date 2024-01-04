export default class User{
  static idCounter=0;
  constructor(email,password)
  {
    this.email = email;
    this.password =password;
    this.id = User.idCounter++;
    
  }
}