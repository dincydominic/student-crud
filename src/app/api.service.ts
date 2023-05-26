import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError,Observable } from 'rxjs';
import { ContactSchema } from 'src/app/models/contactschema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  BASE_URL='https://contact-server-kps1.onrender.com'
  constructor(private http:HttpClient) { }

  //handle error
  handleError(error:HttpErrorResponse){
    let errorMsg:string=''
    
    if(error.error){
      //client error 
      errorMsg=`Error: ${error.error.message}`
    }
    else{
      errorMsg=`status:${error.status} \n Error:${error.message}`
   }
    return throwError(()=>errorMsg)
  }
  
  //get all contacts api
  getAllContacts(){
    //api call: url=http://localhost:3000/contacts req:get
   return this.http.get(`${this.BASE_URL}/contacts`)
  }
  viewContact(id:any){
    //api call: url=http://localhost:3000/contacts/id req:get
    return this.http.get(`${this.BASE_URL}/contacts/${id}`)
  }
  //api call:get a perticular group:  return this.http.get(`${this.BASE_URL}/groups/${id}`)
  getGroup(id:any){
    return this.http.get(`${this.BASE_URL}/groups/${id}`)
  }
  //get all group
  getGroups(){
    //api call http://localhost:3000/groups
    return this. http.get(`${this.BASE_URL}/groups`)
  }
  //add contact
  addContact(contact:ContactSchema){
   //api call
   return this.http.post(`${this.BASE_URL}/contacts`,contact)
  }
//delete contact
deleteContact(id:any){
  //api call server
  return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
}
//edit a  contact
editContact(id:any,contact:ContactSchema){
  //api call
  return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
}
}