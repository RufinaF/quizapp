import { Component, OnInit, Input, Output } from '@angular/core';
import { Quizmodel } from '../quizmodel';


import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  totalAnswered: number = 0;
	rightAnswer: number;

  quesobj = new Quizmodel();

  answerArray = [];


  quizlist: any[]=[
    {
      "ID": 1,"question":"Which of the following is the most powerful type of computer ?","optA":"Super–micro","optB":"Super conductor","optC":"Super computer","optD":"Megaframe","answer":"optC"
    },
    {
      "ID":2, "question":"Which is a single integrated circuit?","optA":"Gate","optB":"Mother Board","optC":"Chip","optD":"CPU","answer":"optA"
    },
    {
      "ID":3, "question":"Web pages are written using ?","optA":"FTP","optB":"HTTP","optC":"HTML","optD":"URL","answer":"optC"
    }
  ];
  

  constructor(private router:Router){

  }

  submitTest() {
		this.rightAnswer = 0;
		this.totalAnswered = 0;
		for (let i = 0; i < this.quizlist.length; i++) {
			if ("selected" in this.quizlist[i] && (this.quizlist[i]["selected"] != null)) {
        this.totalAnswered++;  
        if (this.quizlist[i]["selected"] == this.quizlist[i]["answer"]) {
					this.rightAnswer++;
				}
      }      
    }	
    this.router.navigate(['/review'], {state:{
      totalAnswered: this.totalAnswered,
      rightAnswer: this.rightAnswer
  
    }
  
    })
    
}






ngOnInit() {
}

}
