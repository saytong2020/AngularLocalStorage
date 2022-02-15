import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isShowCard = true;

  ngOnInit(){
    
  }


  isShowHide (){
    if (this.isShowCard){
      this.isShowCard = false;
    }
    else{
      this.isShowCard = true;
    }
  }
  
  

  
}
