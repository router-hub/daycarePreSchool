import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  public states = ["Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry"]
 
  public afterEntryPage = false;
  public afterEntryPageError = false;
  public success = false;

  public workingDays = [
    {id:"Monday-Friday",name:"Monday-Friday"},
    {id:"Saturday",name:"Saturday"},
    {id:"Sunday",name:"Sunday"}
  ]
  
  constructor( private fb: FormBuilder) { }

  entryPageRegistartion : FormGroup;
  preSchoolRegistartion:FormGroup;
  afterSchoolRegistartion:FormGroup;
  partARegistration:FormGroup;
  partBRegistration:FormGroup;
  partCRegistration:FormGroup;
  partDRegistration:FormGroup;
  partERegistration:FormGroup;
  fullDayCareRegistartion:FormGroup;
  weekendCareRegistartion:FormGroup;
  onDemandCareRegistartion:FormGroup;
  nightCareRegistartion:FormGroup;
  specialCareRegistartion:FormGroup;
  facilityPageRegistration:FormGroup;

  ngOnInit(): void {
    this.entryPageRegistartion = this.fb.group({
      name: ['',Validators.required],
      state: ['',Validators.required],
      city: ['',Validators.required],
      locality: ['',Validators.required],
      address: ['',Validators.required],
      pincode: ['',Validators.required],
      contactPerson: ['',Validators.required],
      primaryNumber: ['',Validators.required],
      alternativeNumber: ['',Validators.required],
      email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      preSchoolDaycare: ['',Validators.required],
    })
  
    this.preSchoolRegistartion = this.fb.group({
      minAge : ['',Validators.required],
      maxAge : ['',Validators.required],
      workingDays :['',Validators.required],
      startTime :['',Validators.required],
      endTime :['',Validators.required],
      curriculum :['',Validators.required],
      afterSchoolCare :['',Validators.required]
    })
    
  
    this.afterSchoolRegistartion = this.fb.group({
      minAge : ['',Validators.required],
      maxAge : ['',Validators.required],
      workingDays :['',Validators.required],
      startTime :['',Validators.required],
      endTime :['',Validators.required],
      curriculum :['',Validators.required]
    })
  
    this.partARegistration = this.fb.group({
      fullDayCare : ['',Validators.required]
    })
  
    this.partBRegistration = this.fb.group({
      weekendCare : ['',Validators.required]
    })
  
    this.partCRegistration = this.fb.group({
      onDemandCare : ['',Validators.required]
    })
  
    this.partDRegistration = this.fb.group({
      nightCare : ['',Validators.required]
    })
  
    this.partERegistration = this.fb.group({
      specialCare : ['',Validators.required]
    })
   
  
    this.fullDayCareRegistartion = this.fb.group({
      minAge : ['',Validators.required],
      maxAge : ['',Validators.required],
      workingDays :['',Validators.required],
      startTime :['',Validators.required],
      endTime :['',Validators.required],
    })
  
    this.weekendCareRegistartion = this.fb.group({
      minAge : ['',Validators.required],
      maxAge : ['',Validators.required],
      workingDays :['',Validators.required],
      startTime :['',Validators.required],
      endTime :['',Validators.required],
    })
  
    this.onDemandCareRegistartion = this.fb.group({
      minAge : ['',Validators.required],
      maxAge : ['',Validators.required],
      workingDays :['',Validators.required],
      startTime :['',Validators.required],
      endTime :['',Validators.required],
    })
  
    this.nightCareRegistartion = this.fb.group({
      minAge : ['',Validators.required],
      maxAge : ['',Validators.required],
      workingDays :['',Validators.required],
      startTime :['',Validators.required],
      endTime :['',Validators.required],
    })
    this.specialCareRegistartion = this.fb.group({
      minAge : ['',Validators.required],
      maxAge : ['',Validators.required],
      workingDays :['',Validators.required],
      startTime :['',Validators.required],
      endTime :['',Validators.required],
      regular :['',Validators.required],
    })
  
    this.facilityPageRegistration = this.fb.group({
      facility : ['',Validators.required],
      ameneties : ['',Validators.required],
      curricular : ['',Validators.required],
      year : ['',Validators.required],
      link : ['',Validators.required],
      file : ['',Validators.required]
  
    })
  
    
  }
  firstPage(){
    if(this.entryPageRegistartion.valid)
    this.afterEntryPage = true;
    else{
      this.entryPageRegistartion.markAllAsTouched();
    }
    this.afterEntryPageError = true;

  }
  setState(e){
    this.entryPageRegistartion.patchValue({
      state:e.target.value
    })
  }

 
  submit(){
    let flag = 0;

    if(this.entryPageRegistartion.value.preSchoolDaycare=='Both'||this.entryPageRegistartion.value.preSchoolDaycare=='Preschool'){
      if(this.preSchoolRegistartion.invalid){
        flag = 1;
       this.preSchoolRegistartion.markAllAsTouched();
      }
      if(this.preSchoolRegistartion.value.afterSchoolCare=='Yes'){

        if(this.afterSchoolRegistartion.invalid){
          flag=1;
        this.afterSchoolRegistartion.markAllAsTouched();
        }
      
      }

      if(this.entryPageRegistartion.value.preSchoolDaycare=='Both'||this.entryPageRegistartion.value.preSchoolDaycare=='Daycare'){
        if(this.partARegistration.invalid){
          flag = 1;
          this.partARegistration.get('fullDayCare').markAsTouched();
        }
        if(this.partARegistration.value.fullDayCare=='Yes'){
          if(this.fullDayCareRegistartion.invalid){
            flag=1;
           this.fullDayCareRegistartion.markAllAsTouched();

          }
        }
        if(this.partBRegistration.invalid){
          flag = 1;
          this.partBRegistration.get('weekendCare').markAsTouched();
        }
        if(this.partBRegistration.value.weekendCare=='Yes'){
          if(this.weekendCareRegistartion.invalid){
            flag=1;
           this.weekendCareRegistartion.markAllAsTouched();

          }
        }
        if(this.partCRegistration.invalid){
          flag = 1;
          this.partCRegistration.get('onDemandCare').markAsTouched();
        }
        if(this.partCRegistration.value.onDemandCare=='Yes'){
          if(this.onDemandCareRegistartion.invalid){
            flag=1;
           this.onDemandCareRegistartion.markAllAsTouched();

          }
        }
        if(this.partDRegistration.invalid){
          flag = 1;
          this.partDRegistration.get('nightCare').markAsTouched();
        }
        if(this.partDRegistration.value.nightCare=='Yes'){
          if(this.nightCareRegistartion.invalid){
            flag=1;
            this.nightCareRegistartion.markAllAsTouched();

          }
        }
        if(this.partERegistration.invalid){
          flag = 1;
          this.partERegistration.get('specialCare').markAsTouched();
        }
        if(this.partDRegistration.value.specialCare=='Yes'){
          if(this.specialCareRegistartion.invalid){
            flag=1;
            this.specialCareRegistartion.markAllAsTouched();

          }
        }

      }

      if(this.facilityPageRegistration.invalid){
        flag = 1;
        this.facilityPageRegistration.markAllAsTouched();
      }

      
    }

    if(flag==0){
      this.success = true;
    }
    console.log(flag);



  }




}
