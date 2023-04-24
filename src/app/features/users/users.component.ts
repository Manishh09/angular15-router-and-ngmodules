import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <p>
      users works!
    </p>
    <app-icon></app-icon>
  `,
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
