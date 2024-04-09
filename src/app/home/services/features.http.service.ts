import { Injectable } from '@angular/core';
import { Feature } from 'src/app/shared/types/features';

@Injectable({
  providedIn: 'root'
})
export class FeaturesHttpService {

  features: Feature[] = [
    {
     number: "01",
     name: "Track company-wide progress",
     description: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
    },
    {
     number: "02",
     name: "Advanced built-in reports",
     description: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
    },
    {
     number: "03",
     name: "Everything you need in one place",
     description: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
    }
   ]

  constructor() { }


  getFeatures() {
    return this.features;
  }
}
