import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../people.service'; 

@Component({
  selector: 'app-people-list',
  template: `
    <h2>People List</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let person of people">
          <td>{{person.id}}</td>
          <td>{{person.firstName}}</td>
          <td>{{person.lastName}}</td>
          <td>{{person.email}}</td>
          <td>
            <button (click)="editPerson(person.id)">Edit</button>
            <button (click)="deletePerson(person.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button (click)="addNewPerson()">Add New Person</button>
  `
})
export class PeopleListComponent implements OnInit {
  // Static data for testing purposes
  people = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com' }
  ];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    // Normally, you'd load the data from a service, but we're using static data for now.
  }

  editPerson(id: number): void {
    // Navigate to the edit page with the ID as a parameter
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number): void {
    // For testing, just remove from the static array
    this.people = this.people.filter(p => p.id !== id);
  }

  addNewPerson(): void {
    // Navigate to the Add New Person page (without ID)
    this.router.navigate(['/edit']);
  }
}
