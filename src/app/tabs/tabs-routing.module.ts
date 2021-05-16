import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'how-do-you-feel',
        loadChildren: () => import('../pages/how-do-you-feel/how-do-you-feel.module').then(m => m.HowDoYouFeelPageModule)
      },
      {
        path: 'favourites',
        loadChildren: () => import('../pages/favourites/favourites.module').then(m => m.FavouritesPageModule)
      },
      {
        path: 'breathe',
        loadChildren: () => import('../pages/breathe/breathe.module').then( m => m.BreathePageModule)
      },
      {
        path: 'survey',
        redirectTo: '/survey',
        pathMatch: 'full'
      },
      {
        path: 'group',
        loadChildren: () => import('../group-page/group-page.module').then( m => m.GroupPagePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/how-do-you-feel',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/how-do-you-feel',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
