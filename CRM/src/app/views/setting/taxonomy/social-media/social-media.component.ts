import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TaxonomyService } from '../../../../_services/taxonomy.service'
@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  public Editor = ClassicEditor;
  termName: any;
  discription: any;
  url: any;
  publish: any;

  constructor(private termService: TaxonomyService) { }

  socialMediaForm = new FormGroup({
    accountName: new FormControl(''),
    url: new FormControl(''),
    publish: new FormControl('')
  })

  addSocialMedia() {
    var val = this.socialMediaForm.value;
    let result = this.termService.addSocaialMedia(val)
    alert("suuccessfully store")
    console.log(result);
  }
  ngOnInit(): void {
      
  }

}
