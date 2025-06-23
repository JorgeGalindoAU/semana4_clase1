import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserPagination } from '../interfaces/user_pagination.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ENDPOINT_URL: string = 'https://reqres.in/api/users';
  private ENDPOINT_API_HEADER: string = 'x-api-key';
  private ENDPOINT_API_KEY: string = 'reqres-free-v1';

  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  getUsers(perPage: number, page: number): Observable<IUserPagination> {
    return this.httpClient.get(`${this.ENDPOINT_URL}?per_page=${perPage}&page=${page}`, {
      headers: {
        [this.ENDPOINT_API_HEADER]: this.ENDPOINT_API_KEY,
      },
    }) as Observable<IUserPagination>;
  }
}
