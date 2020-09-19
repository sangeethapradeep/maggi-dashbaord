import { Subject } from 'rxjs';
import { EventService } from './../../../services/event.service';
import { JobStatus } from './../../../models/job';
import { JobService } from './../../../services/jobs/jobs.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.scss']
})
export class JobsTableComponent implements OnInit, OnDestroy {

  jobs: JobStatus[];
  unsubscribe = new Subject();
  constructor(private jobService: JobService, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getRefresh()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.fetchJobs());
  }

  fetchJobs() {
    this.jobService.getAllJobs().subscribe(response => this.jobs = response);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
