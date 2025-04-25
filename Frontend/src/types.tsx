
export interface HomeData {
    Field: string;
    Value: string;
  }

export interface Project {
    Title: string;
    "Tech Stack": string;
    Description: string;
    "GitHub Link": string;
    "Image Url":string;
    "Website":string
  }

export interface Skill {
    Category: string;
    Skill: string;
  }

export interface Certification {
    Title: string;
    Provider: string;
    Date: string;
  }

  export interface Experience {
    Position: string;
    Company: string;
    Location: string;
    'Start Date': string;
    'End Date': string;
    'Project Summary': string;
    Logo:string
  }
  

  export interface Education {
    Degree: string;
    Institution: string;
    'Start Date': string;
    'End Date': string;
    CGPA: string;
    logo: string;
  }  

export type CombinedData = [HomeData[], Education[], Experience[], Project[], Skill[], Certification[]];
