import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import { TaxonomyService } from '../../../_services/taxonomy.service'
import { AlertService, UserService, AuthenticationService } from '../../../_services';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  name = 'Angular';
  media: any
  productForm: FormGroup;
  returnUrl: string;
  loading = false;
  submitted = false;
  constructor(private socialMedia: TaxonomyService, private fb: FormBuilder, private user: UserService, private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService) {
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]),
    });
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  // convenience getter for easy access to form fields
  get f() { return this.productForm.controls; }
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
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
  onSubmit() {
    console.log(this.productForm.value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.register(this.productForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}