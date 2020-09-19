import { RestApiService } from './../rest-api/rest-api.service';
import { GlobalConstants } from './../../util/global-constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobSubmitService {

  private baseUrl: string = GlobalConstants.SERVER_URL;
  private endpoints = {
    execute: 'execute'
  };

  constructor(private restApiService: RestApiService) { }

  execute(sourceCode: string) {
    const url = `${this.baseUrl}/${this.endpoints.execute}`;

    const body = {
      sourceCode,
      taskInput: {
        'Sample 1': 'Arjun SK',
        'Sample 2': 'Sangeetha Pradeep',
        'Sample 3': 'Vishnu Vardhan'
      }
    };

    return this.restApiService.post(url, body);
  }
}
