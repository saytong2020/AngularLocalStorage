import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 registerForm:any

 constructor(private formBuilder:FormBuilder){

 }

  ngOnInit(){
    this.registerForm = this.formBuilder.group (
      {
        firstName: ['',Validators.required],
        lastName: ['',Validators.required],
        email: ['',Validators.email],
        password: ['',[Validators.required,Validators.minLength(6)]],
      }
    );
    
  }

  onSubmit(form:FormGroup){
    console.log(form.value);
  }

  
}
