import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
   eusers = [];
  

  ngOnInit() {

    let users:any =  localStorage.getItem("$user_info");
  
    let eusers = JSON.parse(users);

    this.eusers =eusers;
    
    console.log("Resalt:"+ eusers[0]['name']);
   
  }

  

  createUser(form:NgForm)
  {

    console.log(form.value);

    let eusers:any = [];

    eusers = this.eusers;

    eusers.push(form.value);

    let user = JSON.stringify(eusers);

    localStorage.setItem("$user_info", user);

    form.resetForm();
    
  }



    deleteUser(index:any){

      // 1. get index 
      // 2. find items


      let ind = this.eusers.indexOf(this.eusers[index]);

      if (ind >-1){
        this.eusers.splice(ind,1)
      }
      localStorage.setItem("$user_info",JSON.stringify(this.eusers) );
      console.log(ind);

    }

 

}
