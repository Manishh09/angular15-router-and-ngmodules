import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark text-white">
    <a class="navbar-brand">LOGO</a>

    <div class="navbar-collapse collapse">
      <ul class="navbar-nav">

        <li class="nav-item" routerLink="/home">
          <a class="nav-link" routerLinkActive="active">Home</a>
        </li>

        <li class="nav-item" routerLink="/settings">
          <a class="nav-link" routerLinkActive="active">Settings</a>
        </li>

        <li class="nav-item" routerLink="/users">
          <a class="nav-link" routerLinkActive="active">Users</a>
        </li>
      </ul>
    </div>
  </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
