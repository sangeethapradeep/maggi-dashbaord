import { Observable } from 'rxjs';
import { Job, JobStatus } from './../../models/job';
import { RestApiService } from '../rest-api/rest-api.service';
import { GlobalConstants } from '../../util/global-constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private baseUrl: string = GlobalConstants.SERVER_URL;
  private endpoints = {
    listJobs: 'jobs/',
    submitJob: 'jobs/submit'
  };

  constructor(private restApiService: RestApiService) { }

  getAllJobs(): Observable<JobStatus[]> {
    const url = `${this.baseUrl}/${this.endpoints.listJobs}`;
    return this.restApiService.get(url);
  }

  submitJob(body: Job): Observable<Job> {
    const url = `${this.baseUrl}/${this.endpoints.submitJob}`;
    return this.restApiService.post(url, body);
  }
}
