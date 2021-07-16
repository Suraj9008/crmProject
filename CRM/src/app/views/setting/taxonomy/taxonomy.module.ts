import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TexonomyRoutingModule } from './taxonomy-routing.module';
import { SocialMediaComponent } from './social-media/social-media.component';
import { TermListComponent } from './term-list/term-list.component';
import { TagsComponent } from './tags/tags.component';
import { AddTermComponent } from './add-term/add-term.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    SocialMediaComponent,
    TermListComponent,
    TagsComponent,
    AddTermComponent
  ],
  imports: [
    CommonModule,
    CKEditorModule,
    TexonomyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TexonomyModule { }
