import { Component, OnInit } from '@angular/core';
import { Phrase } from '../Phrase';
import { PhraseService } from '../phrase.service';

@Component({
  selector: 'app-list-phrase',
  templateUrl: './list-phrase.component.html',
  styleUrls: ['./list-phrase.component.css']
})
export class ListPhraseComponent implements OnInit {
  listPhrases: Phrase[] = [];

  constructor(private service: PhraseService) { }

  ngOnInit(): void {
    console.log("ListPhraseComponent.ngOnInit()");

    this.service.get().subscribe((listPhrases) => {
      this.listPhrases = listPhrases;
    });
  }
}
