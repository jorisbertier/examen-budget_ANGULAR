import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { IBill } from 'src/interface/bill/bill.interface';
import { BillService } from 'src/service/bill/bill.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent {

  // public billList: IBill[] = [];

  constructor(private billService: BillService) {}

  
  public form:FormGroup = new FormGroup({
    image: new FormControl('', [Validators.required]),
    // date: new FormControl(''),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required])

  })


  onSubmit() {
    if (this.form.valid) {
      const formData = {
        image: this.form.get('image')?.value,
        date: new Date(),
        category: this.form.get('category')?.value,
        price: this.form.get('price')?.value,
      };

      this.billService.createBill(formData);

      this.form.reset();
    }
  }
}
