import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SampleComponent } from './AllSlides/sample/sample.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'slides/sample', component: SampleComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
