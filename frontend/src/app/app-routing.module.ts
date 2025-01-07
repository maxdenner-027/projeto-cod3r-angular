import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/produto/create/create.component';
import { HomeComponent } from './components/views/home/home.component';
import { CrudComponent } from './components/views/product/crud/crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: CrudComponent
  },
  {
    path: "produtos/novo",
    component: CreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
