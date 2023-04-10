import { Component, OnInit } from '@angular/core';
import { PhraseService } from '../phrase.service';
import { Router } from '@angular/router';
import { Phrase } from '../Phrase';

@Component({
  selector: 'app-create-phrase',
  templateUrl: './create-phrase.component.html',
  styleUrls: ['./create-phrase.component.css']
})
export class CreatePhraseComponent implements OnInit {
  
  phrase: Phrase = {
    content: "Aprendendo Angular",
    author: "Dev",
    model: "model1"
  }

  constructor(private service: PhraseService, private router: Router) { }

  ngOnInit(): void {
    console.log("CreatePhraseComponent.ngOnInit()");
  }

  createPhrase() {
    this.service.create(this.phrase).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelAction() {
    this.router.navigate(['/listarPensamento'])
  }
}
