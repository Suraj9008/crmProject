import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TaxonomyService } from '../../../../_services/taxonomy.service'
@Component({
  selector: 'app-add-term',
  templateUrl: './add-term.component.html',
  styleUrls: ['./add-term.component.scss']
})
export class AddTermComponent implements OnInit {
  public Editor = ClassicEditor;
  termName:any;
  discription:any;
  url:any;
  publish:any;

  constructor(private termService:TaxonomyService) { }

   termForm = new FormGroup({
    termName: new FormControl(''),
    discription: new FormControl(''),
    url: new FormControl(''),
    publish: new FormControl('')
  })
   addTerm(){
        var val = this.termForm.value;
        let result = this.termService.addTerms(val)
        alert("suuccessfully store")
        console.log(result);
    }
  ngOnInit(): void {
  }
}

