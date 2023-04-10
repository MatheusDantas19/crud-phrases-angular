import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePhraseComponent } from './components/phrases/create-phrase/create-phrase.component';
import { ListPhraseComponent } from './components/phrases/list-phrase/list-phrase.component';
import { DeletePhraseComponent } from './components/phrases/delete-phrase/delete-phrase.component';
import { EditPhraseComponent } from './components/phrases/edit-phrase/edit-phrase.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "listarPensamento"
  },
  {
    path: "criarPensamento",
    component: CreatePhraseComponent
  },
  {
    path: "listarPensamento",
    component: ListPhraseComponent
  },
  {
    path: "excluirPensamento/:id",
    component: DeletePhraseComponent
  },
  {
    path: "editarPensamento/:id",
    component: EditPhraseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
