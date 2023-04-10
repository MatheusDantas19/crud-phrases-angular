import { Component, OnInit } from '@angular/core';
import { Phrase } from '../Phrase';
import { PhraseService } from '../phrase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-phrase',
  templateUrl: './edit-phrase.component.html',
  styleUrls: ['./edit-phrase.component.css']
})
export class EditPhraseComponent implements OnInit {

  phrase: Phrase = {
    id: undefined,
    content: "",
    author: "",
    model: ""
  }

  constructor(private service: PhraseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("EditPhraseComponent.ngOnInit()");

    const id = this.route.snapshot.paramMap.get("id");

    this.service.buscarPorId(parseInt(id!)).subscribe((phrase) => {
      this.phrase = phrase
    });
  }

  updatePhrase(): void {
    console.log("EditPhraseComponent.updatePhrase()");

    this.service.update(this.phrase.id!, this.phrase).subscribe(() => {
      alert("Pensamento editado com sucesso");
      this.router.navigate(["/listarPensamento"]);
    });
  }

  cancelAction(): void {
    this.router.navigate(["/listarPensamento"]);
  }
}
