import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Quizmodel } from '../quizmodel';
import { QuizComponent } from '../quiz/quiz.component';





@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  
  compobj:QuizComponent[];
  totalAnswered: number = 0;
	rightAnswer: number;
  
  quesobj = new Quizmodel();
  

  constructor(private router:Router){
    this.totalAnswered=this.router.getCurrentNavigation().extras.state.totalAnswered;
    this.rightAnswer=this.router.getCurrentNavigation().extras.state.rightAnswer;
  }
  
  
  resultdisplay(){
    
    this.router.navigate(['/results'], {state:{
      rightAnswer: this.rightAnswer  
    }  
    })
  }

  ngOnInit() {
    
   
    
  }
  

}
