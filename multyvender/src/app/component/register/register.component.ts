import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name!:String;
  email!: String;
  tel!:String;
  password!:String;
  repassword!:String;
  role!:String;


  


  addaddUser(){
    const newProduct = {
      name : this.name,
      email : this.email,
      tel : this.tel,
      password : this.password,
      repassword : this.repassword,
      
    }

  }
}
