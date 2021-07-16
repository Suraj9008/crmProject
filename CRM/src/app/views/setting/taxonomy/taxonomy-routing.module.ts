import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTermComponent } from './add-term/add-term.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { TagsComponent } from './tags/tags.component';
import { TermListComponent } from './term-list/term-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'setting'
    },
    children: [
      {
        path: '',
        redirectTo: 'setting'
      },
      {
        path: 'social-media',
        component: SocialMediaComponent,
        data: {
          title: 'social media'
        }
      },
      {
        path: 'term-list',
        component: TermListComponent,
        data: {
          title: 'term-list'
        }
      },
      {
        path: 'add-term',
        component: AddTermComponent,
        data: {
          title: 'add-term'
        }
      },
      {
        path: 'tags',
        component: TagsComponent,
        data: {
          title: 'tags'
        }
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TexonomyRoutingModule { }
