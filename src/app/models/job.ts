export interface Job {
    id?: number;
    programCode: string;
    jobArguments: JobArguments;
    jobExecutionParameters: JobExecutionParameters;
}

export interface JobArguments {
    sourceConnectionString: string;
    sinkConnectionString: string;
    outputFilePrefix: string;
}

export interface JobExecutionParameters {
    quorumSize: number;
    accessPermissions: any;
    machineProfile: string;
}

export interface JobStatus {
    jobId: string;
    jobStatus: string;
}
