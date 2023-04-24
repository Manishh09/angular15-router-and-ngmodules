import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <div class="btn-group">
      <button
        class="btn btn-primary text"
        routerLink="./profile"
        routerLinkActive="text-bg-warning"
      >Profile</button>
      <button
        routerLink="./configuration"
        routerLinkActive="text-bg-warning"
        class="btn btn-primary "
      >Configuration</button>
    </div>
    <!-- secondary router-outlet -->
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
