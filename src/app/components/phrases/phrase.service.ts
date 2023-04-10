import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Phrase } from './Phrase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  private readonly API: string = "http://localhost:3000/phrases";

  constructor(private http: HttpClient) { }

  get(): Observable<Phrase[]> {
    return this.http.get<Phrase[]>(this.API);
  }

  create(phrase: Phrase): Observable<Phrase> {
    return this.http.post<Phrase>(this.API, phrase);
  }

  update(id: number, phrase: Phrase): Observable<Phrase> {
    const url = `${this.API}/${id}`
    return this.http.put<Phrase>(url, phrase);
  }

  delete(id: number): Observable<Phrase> {
    const url = `${this.API}/${id}`
    return this.http.delete<Phrase>(url)
  }

  buscarPorId(id: number): Observable<Phrase> {
    const url = `${this.API}/${id}`
    return this.http.get<Phrase>(url)
  }
}
