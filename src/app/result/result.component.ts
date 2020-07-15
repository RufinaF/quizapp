import { Component, OnInit } from '@angular/core';
import { QuizComponent } from "../quiz/quiz.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  
  
  rightAnswer:number
  
  constructor(private router:Router) { 
    this.rightAnswer=this.router.getCurrentNavigation().extras.state.rightAnswer;
    
  }
  

  ngOnInit() {
    
  }
  homePage(){
    this.router.navigate(['/takequiz'])
  }

}
