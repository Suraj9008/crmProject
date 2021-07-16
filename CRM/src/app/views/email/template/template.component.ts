import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {
  public Editor = ClassicEditor;

  template = `<div class="row">
  <div class="col">
  </div>
  <div class="col">
    <div class="card" style="width: 25rem;">
        <img src="https://i.pinimg.com/originals/ba/ee/7d/baee7d789ce0a5724025683d7eb99ce1.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Congratulation !!!</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Verify Email</a>
        </div>
      </div>    
  </div>
  <div class="col">
  </div>
</div>
</div>`

  constructor() { }

  ngOnInit(): void {
  }

}
