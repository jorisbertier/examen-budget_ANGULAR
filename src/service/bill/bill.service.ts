import { Injectable } from '@angular/core';
import { BILLS } from 'src/mock-bill';
import { IBill } from 'src/interface/bill/bill.interface';
import { BILLS2 } from 'src/mock2-bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private billList: IBill[] = [];

  constructor() { }

  fetchAllBills() {
    return this.billList;
  }

  fetchAllBills2() {
    return BILLS2;
  }

  createBill(formData: any) {
    this.billList.push(formData);
  }

  getBillList() {
    return this.billList;
  }

}
