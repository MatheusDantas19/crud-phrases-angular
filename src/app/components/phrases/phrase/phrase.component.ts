import { Component, Input, OnInit } from '@angular/core';
import { Phrase } from '../Phrase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.css']
})
export class PhraseComponent implements OnInit {
  @Input() phrase: Phrase = {
    id: 0,
    content: "I Love Angular",
    author: "Matheus",
    model: "model3"
  }

  constructor(private route: ActivatedRoute) { 
    const isPageEdit: boolean = route.snapshot.paramMap.get('id') !== undefined;
  }

  ngOnInit(): void {
    console.log("PhraseComponent.ngOnInit()");
  }

  getWidthCardPhrase(): string {
    console.log("PhraseComponent.getWidthCardPhrase()");

    if(this.phrase.content.length >=256) {
      return 'phrase-g'
    }
    return 'phrase-p'
  }
}
