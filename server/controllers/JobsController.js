import { jobsService } from "../services/JobsService";
import BaseController from "../utils/BaseController";


export class JobsController extends BaseController{
    constructor(){
        super('/api/jobs')
        this.router
        .get('', this.getJobs)
        .get('/:jobId', this.getJobById)
        .post('', this.createJob)
        .delete('/:jobId', this.deleteJob)
        .put('/:jobId', this.editJob)
    }

    async getJobs(req, res, next){
        try {
            let jobs = await jobsService.getJobs()
            res.send(jobs)
        } catch (error) {
            next(error)
        }
    }

    async getJobById(req, res, next){
        try {
            let job = await jobsService.getJobById(req.params.jobId)
            res.send(job)
        } catch (error) {
            next(error)
        }
    }

    async createJob(req, res, next){
        try {
            let jobData = req.body
            let job = await jobsService.createJob(jobData)
            res.send(job)
        } catch (error) {
            next(error)
        }
    }

    async deleteJob(req, res, next){
        try {
            let job = await jobsService.deleteJob(req.params.jobId)
            res.send(job)
        } catch (error) {
            next(error)
        }
    }

    async editJob(req, res, next){
        try {
            let jobData = req.body
            let job = await jobsService.editJob(req.params.jobId, jobData)
            res.send(job)
        } catch (error) {
            next(error)
        }
    }
}