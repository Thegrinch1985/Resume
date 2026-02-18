import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  language?: string | null;
  stargazers_count?: number;
  forks_count?: number;
  fork?: boolean;
  archived?: boolean;
}
@Injectable({
  providedIn: 'root'
})


export class GithubService {

  private baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getRepositories(
    username: string,
    options?: {
      perPage?: number;
      sort?: 'created' | 'updated' | 'pushed' | 'full_name';
      direction?: 'asc' | 'desc';
    }
  ): Observable<Repository[]> {
    const params = new HttpParams({
      fromObject: {
        per_page: String(options?.perPage ?? 100),
        sort: options?.sort ?? 'updated',
        direction: options?.direction ?? 'desc',
      },
    });

    return this.http.get<Repository[]>(`${this.baseUrl}/users/${username}/repos`, { params });
  }
}