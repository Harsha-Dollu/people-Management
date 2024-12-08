import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';

export const routes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'edit', component: PeopleEditComponent },
  { path: 'edit/:id', component: PeopleEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule] 
})
export class AppRoutingModule {}
