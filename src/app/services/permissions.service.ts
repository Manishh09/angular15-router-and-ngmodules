import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor() { }

  isAdmin(userRole: string): Observable<boolean> {
    return of(userRole === 'Admin');
  }

  isLoggedIn(): Observable<boolean> {
    return of(false);
  }
  isLoggedOut() :  Observable<boolean>{
    return of(false);
  }
}
