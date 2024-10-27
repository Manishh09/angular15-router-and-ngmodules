import { HttpClient } from '@angular/common/http';
import { Injectable, inject, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly http = inject(HttpClient);
  private readonly url = 'https://jsonplaceholder.typicode.com/users'

  getAllUsers(){
    return this.http.get(this.url);
  }

  getUsersById(id: number){
    return this.http.get(`${this.url}/${id}`);
  }
}
