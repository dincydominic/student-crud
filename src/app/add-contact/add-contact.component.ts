import { Component, OnInit } from '@angular/core';
import { ContactSchema } from 'src/app/models/contactschema';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
contact:ContactSchema={}
groups:any=[]
constructor(private api:ApiService,private addContactRouter:Router){
  this.contact.groupId="select a group"
}
ngOnInit(): void {
   this.api.getGroups().subscribe({
    next:(response:any)=>{
   console.log(response);
   this.groups=response
   },
   error:(err:any)=>{
    console.log(err.message);
    }
  })
  }
  addContact(contact:ContactSchema){
    //call api in srvice
    this.api.addContact(contact).subscribe({
      next:(response:any)=>{
        //data added into server
        console.log(response);
        //navigate to all contact page
       this.addContactRouter.navigateByUrl('')
      },
      error:(err:any)=>{
        console.log(err);}
        
      
    })

  }
}

 
