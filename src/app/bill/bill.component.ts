import { Component, OnInit } from '@angular/core';
import { IBill } from 'src/interface/bill/bill.interface';
import { BillService } from 'src/service/bill/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  title: string = 'bill-app';
  billList: IBill[] = [];
  billList2: IBill[] = [];
  totalBills: number = 0;

  constructor(private billService: BillService) {

  }

  ngOnInit() {
    this.getBill();
    this.getBill2();

}

  getBill() {
    this.billList = this.billService.fetchAllBills();
    this.getTotalPriceBills();
  }

  getBill2() {
    this.billList2 = this.billService.fetchAllBills2();
    return this.billList2;
  }

  deleteBill(index: number) {
    
      this.billList.splice(index, 1);
      this.getTotalPriceBills();
    
  }

  getTotalPriceBills() {
    this.totalBills = this.billList.reduce((total, bill) => total + bill.price, 0);
    this.totalBills = parseFloat(this.totalBills.toFixed(2));
  }
}
