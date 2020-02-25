import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Student {
  studentName: string;
}

const ERROR_MESSAGES = {
  minlength: 'The name should have more than 6 characters',
  required: 'The name is required'
};

const mockList: string[] = [
  'David',
  'Cristian',
  'Manuel',
  'Kendra',
  'Aquiles',
  'Horse Luis',
  'Victor',
  'Horse Miguel',
  'Chorizo'
];

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  username: string;
  nameList: string[];
  constantList: string[];
  studentForm: FormGroup;
  userErrors: string[];
  errorMessages: object;

  constructor(private formBuilder: FormBuilder) {
    this.username = '';
    this.userErrors = [];
    this.nameList = mockList;
    this.constantList = mockList;
    this.errorMessages = ERROR_MESSAGES;
    this.studentForm = this.formBuilder.group({
      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ]
      ],
    });
  }

  ngOnInit() {
  }

  // filterName(name: string): void {
  //   const lowerCaseName: string = name.toLowerCase().trim();

  //   const newNameList: string[] = this.constantList.filter(listName => {
  //     return listName.toLowerCase().includes(lowerCaseName);
  //   });

  //   this.nameList = newNameList;
  // }

  onSubmit(formValue: Student): void {
    const { studentName: studentControl } = this.studentForm.controls;
    const userErrors = Object.keys(studentControl.errors || {});

    this.userErrors = userErrors;

    if (!userErrors.length) {
      const { studentName } = formValue;
      this.constantList.push(studentName);
    }
  }
}
