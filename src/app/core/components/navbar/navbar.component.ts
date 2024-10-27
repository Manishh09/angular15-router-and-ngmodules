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

       

        <li class="nav-item" routerLink="/users">
          <a class="nav-link" routerLinkActive="active">Users</a>
        </li>

        <li class="nav-item" routerLink="/gallery">
          <a class="nav-link" routerLinkActive="active">Gallery</a>
        </li>

        <li class="nav-item" routerLink="/contact">
          <a class="nav-link" routerLinkActive="active">Contact</a>
        </li>

        <li class="nav-item" routerLink="/about">
          <a class="nav-link" routerLinkActive="active">About</a>
        </li>

      </ul>
    </div>
  </nav>
  `,
  styles: [
    `
    li {
      cursor: pointer
    }
    
    `
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
