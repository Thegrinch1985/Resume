import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  // Other properties if needed
}
@Injectable({
  providedIn: 'root'
})


export class GithubService {

  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  // Replace 'your-github-username' with your actual GitHub username when calling this method
  getRepositories(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.baseUrl}/users/${username}/repos`);
  }
}