import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.apiUrl + `/user`);
  }
  create(usr: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + `/user/create`, usr);
  }
}

