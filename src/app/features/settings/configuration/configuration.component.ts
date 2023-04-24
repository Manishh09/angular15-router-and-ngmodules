import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  template: `
    <p>
      configuration works!
    </p>
    <button
    class="btn btn-outline-primary"
    (click)="goToProfile()"
    >
    Go to Profile
    </button> 
  `,
  styles: [
  ]
})
export class ConfigurationComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {

  }

  goToProfile(): void {
    this.router.navigateByUrl('/settings/profile')
  }

}
