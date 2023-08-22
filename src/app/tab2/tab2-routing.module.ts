import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'tab1',
    loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'tab3',
    loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
