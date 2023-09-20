import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BillComponent } from './bill/bill.component';
import { AddBillComponent } from './add-bill/add-bill.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bill', component: BillComponent},
  {path: 'addBill', component: AddBillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
