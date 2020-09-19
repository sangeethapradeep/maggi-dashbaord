import { JobSubmitService } from './../../services/job-sumit/job-submit.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-submission',
  templateUrl: './job-submission.component.html',
  styleUrls: ['./job-submission.component.scss']
})
export class JobSubmissionComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;
  result: any;

  constructor(private formBuilder: FormBuilder,
              private jobService: JobSubmitService) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
      allowInternet: [''],
      quorum: [{ value: 1, disabled: true }]
    });
  }

  executeCode() {
    this.jobService.execute(this.firstFormGroup.value.firstCtrl).subscribe(response => {
      this.result = JSON.stringify(response, null, '\t');
    });
  }

}
