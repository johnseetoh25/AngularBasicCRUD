import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDataPageComponent } from './dialogs/edit-data-page/edit-data-page.component';
import { ViewDataPageComponent } from './dialogs/view-data-page/view-data-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InsertDataPageComponent } from './pages/insert-data-page/insert-data-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'insert-data-page', component: InsertDataPageComponent },
  { path: 'edit-data-page/:id', component: EditDataPageComponent },
  { path: 'view-data-page/:id', component: ViewDataPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
