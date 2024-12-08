import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import the routing module
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';  // Import the PeopleListComponent
import { PeopleEditComponent } from './people-edit/people-edit.component';  // Import the PeopleEditComponent

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,  // Declare the PeopleListComponent
    PeopleEditComponent   // Declare the PeopleEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Import the routing module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
