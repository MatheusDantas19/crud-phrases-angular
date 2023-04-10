import { Component, OnInit } from '@angular/core';
import { Phrase } from '../Phrase';
import { PhraseService } from '../phrase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-phrase',
  templateUrl: './delete-phrase.component.html',
  styleUrls: ['./delete-phrase.component.css']
})
export class DeletePhraseComponent implements OnInit {

  phrase: Phrase = {
    id: undefined,
    content: "",
    author: "",
    model: ""
  }

  constructor(private service: PhraseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((phrase) => {
      this.phrase = phrase
    })
  }

  excluirPensamento(): void {
    if (this.phrase.id) {
      this.service.delete(this.phrase.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      });
    }
  }

  cancelAction(): void {
    this.router.navigate(['/listarPensamento'])
  }

}
