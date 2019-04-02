import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthorComponent } from './about/authors/author/author.component';
import { AuthorsComponent } from './about/authors/authors.component';
import { InfoComponent } from './about/info/info.component';
import { LinksComponent } from './about/links/links.component';
import { HugoComponent } from './hugo.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: 'links',
        component: LinksComponent
      },
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: 'authors',
        component: AuthorsComponent
      },
      {
        path: 'authors/:id',
        component: AuthorComponent
      }
    ]
  },
  {
    path: 'hugo',
    component: HugoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
