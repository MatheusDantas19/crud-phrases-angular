import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreatePhraseComponent } from './components/phrases/create-phrase/create-phrase.component';
import { FormsModule } from '@angular/forms';
import { ListPhraseComponent } from './components/phrases/list-phrase/list-phrase.component';
import { PhraseComponent } from './components/phrases/phrase/phrase.component';
import { HttpClientModule } from '@angular/common/http';
import { DeletePhraseComponent } from './components/phrases/delete-phrase/delete-phrase.component';
import { EditPhraseComponent } from './components/phrases/edit-phrase/edit-phrase.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreatePhraseComponent,
    ListPhraseComponent,
    PhraseComponent,
    DeletePhraseComponent,
    EditPhraseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
