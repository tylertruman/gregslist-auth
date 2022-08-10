import { Job } from "../Models/Job.js";


export function getJobForm(job = new Job({})) {
    let submitAction = 'app.jobsController.createJob()'
    if(job.id){
        submitAction = `app.jobsController.editJob('${job.id}')`
    }

    return `
    <form class="col-10 bg-white p-3 elevation-2 card" onsubmit="${submitAction}">
          <h3 class="text-primary text-center">List Your Job</h3>
          <div class="row card-body">
            <div class="col-12 col-sm-6">
              <label class="form-label my-1" for="jobTitle">Job Title</label>
              <input class="form-control" type="text" id="jobTitle" name="jobTitle" value="${job.jobTitle}">
            </div>
            <div class="col-12 col-sm-6">
              <label class="form-label my-1" for="company">Company</label>
              <input class="form-control" type="text" id="company" name="company" value="${job.company}">
            </div>
            <div class="col-12 col-sm-6">
              <label class="form-label my-1" for="hours">Hours</label>
              <input class="form-control" type="number" id="hours" name="hours" value="${job.hours}">
            </div>
            <div class="col-12 col-sm-6">
              <label class="form-label my-1" for="rate">Hourly Rate</label>
              <input class="form-control" type="number" id="rate" name="rate" value="${job.rate}">
            </div>
            <div class="col-12">
            <label class="form-label my-1" for="description"> Job Description</label>
            <textarea class="w-100 form-control" name="description" id="description" rows="5" value="${job.description}"></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
          </div>
        </form>`
}