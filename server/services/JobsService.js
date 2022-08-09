import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";


class JobsService{
    async getJobs(){
        let jobs = await dbContext.Jobs.find({})
        return jobs
    }

    async getJobById(jobId){
        let job = await dbContext.Jobs.findById(jobId)
        if(!job){
            throw new BadRequest('Invalid Job Id')
        }
        return job
    }

    async createJob(jobData){
        let job = await dbContext.Jobs.create(jobData)
        return job
    }

    async deleteJob(jobId){
        let job = await this.getJobById(jobId)
        await job.remove()
        return job
    }

    async editJob(jobId, jobData){
        let job = await this.getJobById(jobId)
        job.jobTitle = jobData.jobTitle || job.jobTitle
        job.company = jobData.company || job.company
        job.hours = jobData.hours || job.hours
        job.rate = jobData.rate || job.rate
        job.description = jobData.description || job.description
        await job.save()
        return job
    }
}

export const jobsService = new JobsService()