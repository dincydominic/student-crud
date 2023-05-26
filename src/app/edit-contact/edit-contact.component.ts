import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactSchema } from 'src/app/models/contactschema';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {


  contact:ContactSchema={}
  groups:any=[]
  constructor(private editActivatedRoute:ActivatedRoute,private api:ApiService,private editRouter:Router){

  }
  ngOnInit(): void {
    this.editActivatedRoute.params.subscribe({
      next:(pathPrameter:any)=>{
        const{id}=pathPrameter
        console.log(id);
        //call ciew contact api
        this.api.viewContact(id).subscribe({
          next:(response:any)=>{
            console.log(response);
            this.contact=response
            
          }
        })
        
      }
    })
      //get groups
      this.api.getGroups().subscribe({
        next:(allGroups:any)=>{
          this.groups=allGroups
          console.log(this.groups);
          
        }
      })
    }
    editContact(id:any){
      //api call edit contact
      this.api.editContact(id,this.contact).subscribe({
        next:(response:any)=>{
          //navigate all contact
          this.editRouter.navigateByUrl("")

        }
      })
    }
  }

