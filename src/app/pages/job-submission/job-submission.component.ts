import { JobExecutionParameters } from './../../models/job';
import { JobService } from './../../services/jobs/jobs.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Job, JobArguments } from 'src/app/models/job';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-job-submission',
  templateUrl: './job-submission.component.html',
  styleUrls: ['./job-submission.component.scss']
})
export class JobSubmissionComponent implements OnInit {

  codeForm: FormGroup;
  argForm: FormGroup;
  machineProfileForm: FormGroup;
  isEditable = true;
  result: number = null;

  constructor(private formBuilder: FormBuilder,
              private jobService: JobService) { }

  ngOnInit() {
    this.codeForm = this.formBuilder.group({
      src: ['', Validators.required]
    });
    this.argForm = this.formBuilder.group({
      srcString: ['', Validators.required],
      sinkString: ['', Validators.required],
      quorum: [{ value: 1, disabled: true }],
      internetAccess: [false],
      filePrefix: ['']
    });
    this.machineProfileForm = this.formBuilder.group({
      profile: ['', Validators.required]
    });
  }

  executeCode(stepper: MatStepper) {
    const jobArg: JobArguments = {
      outputFilePrefix: this.argForm.value.filePrefix,
      sinkConnectionString: this.argForm.value.sinkString,
      sourceConnectionString: this.argForm.value.srcString
    };

    const jobExecParam: JobExecutionParameters = {
      accessPermissions: {
        INTERNET: this.argForm.value.internetAccess
      },
      quorumSize: this.argForm.value.quorum,
      machineProfile: this.machineProfileForm.value.profile
    };

    const request: Job = {
      jobArguments: jobArg,
      jobExecutionParameters: jobExecParam,
      programCode: this.codeForm.value.src
    };

    this.result = 1;

    this.jobService.submitJob(request).subscribe(response => {
      this.result = response.id;
      stepper.next();
    });
  }
}
