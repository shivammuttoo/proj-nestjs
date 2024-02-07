import { Injectable } from '@nestjs/common';
import businesses from 'src/data/businesses';
import classifications from 'src/data/classifications';
import jobs from 'src/data/jobs';
import locations from 'src/data/locations';

export type BusinessType = {
  id: number,
  username: string,
  display_name: string,
  classifications: number[],
  locations_served: number[],
}
@Injectable()
export class BusinessesService {
  getBusinessUsers(): BusinessType[] {
  
    return businesses;
  }
  getUserJobs(userId){
    
    const userDetails = this.getBusinessUsers().find((user)=>{
       return user.id == userId
    })
  
    let filteredJobs = jobs.filter((job)=>{
        return userDetails.classifications.indexOf(job.classification) !== -1 && userDetails.locations_served.indexOf(job.location) !== -1
    })
    
    let filteredJobsWithDetails = filteredJobs.map((filteredJob)=>{
        const jobLocation = locations.find((location)=> filteredJob.location === location.id)
        const jobClassification = classifications.find((classification)=> filteredJob.classification === classification.id)
        return {...filteredJob, location: jobLocation, classification: jobClassification, date: new Date(filteredJob.date_added).toDateString()  }
    })

    return filteredJobsWithDetails
}
}
