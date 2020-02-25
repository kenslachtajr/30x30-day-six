import { Component, OnInit } from '@angular/core';
import { Shoe, ShoesService, emptyShoe, NotifyService } from '@shoes/core-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'shoes-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {
  shoe$;
  selectedShoe: Shoe;
  form: FormGroup;

  constructor(
    private shoesService: ShoesService,
    private formBuilder: FormBuilder,
    private notify: NotifyService
  ) {}

  resetShoe() {
    this.form.reset();
    this.selectShoe(emptyShoe);
  }

  ngOnInit() {
    this.getShoes();
    this.initForm();
    this.resetShoe();
  }

  selectShoe(shoe: Shoe) {
    this.selectedShoe = shoe;
    this.form.patchValue(shoe);
  }

  getShoes() {
    this.shoe$ = this.shoesService.all();
  }

  saveShoe() {
    if(!this.form.value.id) {
      this.createShoe();
    } else {
      this.updateShoe();
    }
  }

  updateShoe() {
    this.shoesService.update(this.form.value).subscribe(() => {
      this.getShoes();
      this.resetShoe();
    });
    this.notify.notification(`You have updated ${this.form.value.type}`);
  }

  createShoe() {
    this.shoesService.create(this.form.value).subscribe(() => {
      this.getShoes();
      this.resetShoe();
    });
    this.notify.notification(`You have created ${this.form.value.type}`);
  }

  deleteShoe(shoe) {
    this.shoesService.delete(shoe.id).subscribe(() => this.getShoes());
    this.notify.notification(`You have deleted ${shoe.title}`);
  }

  cancel() {
    this.resetShoe();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
      coolLevel: [null, Validators.compose([Validators.required])],
    });
  }

}
