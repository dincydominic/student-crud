import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactComponent } from './all-contact/all-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  // path allcontacts
  {
    path:'',component:AllContactComponent
  },
  //path add-contact
  {
    path:'add-contact',component:AddContactComponent
  },
  //view-contact
  {
    path:'view-contact/:id',component:ViewContactComponent
  },
  //edit-contact
  {
  path:'edit-contact/:id',component:EditContactComponent
 },
 //page not found
 //{
 // path:'**',component:PageNotFoundComponent
 //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
