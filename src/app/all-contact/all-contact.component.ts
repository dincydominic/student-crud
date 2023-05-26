import { Component, OnInit } from '@angular/core';
import { ContactSchema } from 'src/app/models/contactschema';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit{
//to hold  all contacts 
  allcontacts:any=[]
  isLoading:boolean=true
  errorMsg:string=''
 // todaydate:Date=new Date()
 searchkey:string=""
  constructor(private api:ApiService){
  
}
ngOnInit(): void {
 this.getAllContacts()
  }
  //get all contact
  getAllContacts()
{
  this.api.getAllContacts().subscribe({
    next:(response:any)=>{
     console.log(response);
    setTimeout(()=>{
     this.allcontacts=response
    this.isLoading=false
   },2000);
   },
     error:(err:any)=>{
       console.log(err.message);
       this.errorMsg=err.message
       this.isLoading=false
   }
   })}
  deleteContact(id:any){
    this.api.deleteContact(id).subscribe({
      next:(response:any)=>{
       this.getAllContacts()
      }
    })
  }
}
 
