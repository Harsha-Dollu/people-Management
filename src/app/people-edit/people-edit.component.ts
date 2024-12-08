import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService, Person } from '../people.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-people-edit',
  template: `
    <h2>{{ isEditMode ? 'Edit Person' : 'Add New Person' }}</h2>
    <form (ngSubmit)="onSubmit()">
      <div>
        <label>First Name:</label>
        <input type="text" formControlName="firstName">
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" formControlName="lastName">
      </div>
      <div>
        <label>Email:</label>
        <input type="email" formControlName="email">
      </div>
      <button type="submit" [disabled]="personForm.invalid">
        {{ isEditMode ? 'Update' : 'Create' }}
      </button>
      <button type="button" (click)="cancel()">Cancel</button>
    </form>
  `
})
export class PeopleEditComponent implements OnInit {
  personForm: FormGroup;
  isEditMode = false;
  personId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.personForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.personId = +id;
        this.loadPerson(this.personId);
      }
    });
  }

  loadPerson(id: number): void {
    this.peopleService.getPerson(id).subscribe(
      person => {
        this.personForm.patchValue(person);
      }
    );
  }

  onSubmit(): void {
    if (this.personForm.valid) {
      const personData: Person = {
        ...this.personForm.value,
        id: this.personId
      };

      if (this.isEditMode) {
        this.peopleService.updatePerson(personData).subscribe(
          () => this.router.navigate(['/'])
        );
      } else {
        this.peopleService.createPerson(personData).subscribe(
          () => this.router.navigate(['/'])
        );
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}