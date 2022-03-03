import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
   users = [];
  
   registerForm:any;

   isUpdate:boolean = false;

   constructor(private fb:FormBuilder){
     
   }

  ngOnInit() {


    this.registerForm = this.fb.group (
      {
        name: ['',Validators.required],
        username: ['',Validators.required],
        email: ['',Validators.email],
        phone: ['',[Validators.required,Validators.minLength(9),Validators.maxLength(10)]],
      }
    );

    let eusers:any = localStorage.getItem("$user_info");
    let users = JSON.parse(eusers);
    this.users = users;
    
   
   
  }

  

  createUser()
  {

    if (this.isUpdate)
    {
      //Update
    }
    else
    {
      console.log(this.registerForm.getRawValue());

      let userForm:any = this.registerForm.getRawValue();
      let users:any = [];

      users = this.users;

      users.push(userForm);

      let user = JSON.stringify(users);
      
      localStorage.setItem("$user_info", user);

      this.registerForm.reset();
    }

    
  }
    deleteUser(index:any)
    {

      // 1. get index 
      // 2. find items


      let ind = this.users.indexOf(this.users[index]);

      if (ind >-1){
        this.users.splice(ind,1)
      }
      localStorage.setItem("$user_info",JSON.stringify(this.users) );
      console.log(ind);

    }

    editUser(index:any)
    {
      
      let user:any = this.users[index];
      console.log(this.users[index]);

      this.registerForm.patchValue({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
      });

      if (this.isUpdate){
        this.isUpdate = true;
      }
    }
}
