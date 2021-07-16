import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
declare var jQuery: any;
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { TaxonomyService } from '../../../_services/taxonomy.service'
@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {
  name = 'Angular';
  private stepper: Stepper;
  media: any
  productForm: FormGroup;

  constructor(private socialMedia: TaxonomyService, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]),
    });
  }

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }
   
  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
    this.media = this.socialMedia.showSocialMedia();
  }


  quantities(): FormArray {
    return this.productForm.get("quantities") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }

  check() {
    jQuery('#exampleModal').modal('show');
  }

  checkPhone() {

  }
  checkext(value) {
    if (value == "+91") {
      jQuery("#ms_num").attr('maxlength', '10', 'minlength', '10');
    } else if (value == "+93") {
      jQuery("#ms_num").attr('maxlength', '8', 'minlength', '8');
    } else if (value == "+355") {
      jQuery("#ms_num").attr('maxlength', '12', 'minlength', '12');
    }
  }

}
