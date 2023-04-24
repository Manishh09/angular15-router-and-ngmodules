import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-profile',
  template: `
    <p>profile works!</p>
    <button class="btn btn-outline-primary" (click)="goToConfiguration()">
      Go to Configuration
    </button>
  `,
  styles: [],
})
export class ProfileComponent implements OnInit {
  unsavedChanges = false;
  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.unsavedChanges = true;
  }
  goToConfiguration(): void {
    this.router.navigateByUrl('/settings/configuration');
  }
  canDeactivate(): Observable<boolean> | boolean {
    return this.unsavedChanges
      ? of(
          window.confirm(
            'You are about to navigate away from this page. Would you like to continue?'
          )
        )
      : true;
  }
}
