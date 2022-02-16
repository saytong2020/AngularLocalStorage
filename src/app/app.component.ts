import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 registerForm:any

  ngOnInit(){
    this.registerForm = new FormGroup (
      {
        firstName: new FormControl(),
        lastName: new FormControl(),
        email: new FormControl(),
        password: new FormControl(),
      }
    );
    
  }

  onSubmit(form:FormGroup){
    console.log(form.value.email);
  }

  
}
