import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'introduce-step',
    loadChildren: () =>
      import('./pages/introduce-step/introduce-step.module').then(
        (m) => m.IntroduceStepPageModule
      ),
  },
  {
    path: 'create-account',
    loadChildren: () =>
      import('./pages/create-account/create-account.module').then(
        (m) => m.CreateAccountPageModule
      ),
  },
  {
    path: 'enjoy-your-day',
    loadChildren: () =>
      import('./pages/enjoy-your-day/enjoy-your-day.module').then(
        (m) => m.EnjoyYourDayPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'fan-speed',
    loadChildren: () =>
      import('./pages/fan-speed/fan-speed.module').then(
        (m) => m.FanSpeedPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'forget-password',
    loadChildren: () =>
      import('./pages/forget-password/forget-password.module').then(
        (m) => m.ForgetPasswordPageModule
      ),
  },
  {
    path: 'how-do-you-feel',
    loadChildren: () =>
      import('./pages/how-do-you-feel/how-do-you-feel.module').then(
        (m) => m.HowDoYouFeelPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'is-this-better',
    loadChildren: () =>
      import('./pages/is-this-better/is-this-better.module').then(
        (m) => m.IsThisBetterPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'set-new-password',
    loadChildren: () =>
      import('./pages/set-new-password/set-new-password.module').then(
        (m) => m.SetNewPasswordPageModule
      ),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./pages/sign-in/sign-in.module').then((m) => m.SignInPageModule),
  },
  {
    path: 'verify-code',
    loadChildren: () =>
      import('./pages/verify-code/verify-code.module').then(
        (m) => m.VerifyCodePageModule
      ),
  },
  {
    path: 'favourites',
    loadChildren: () =>
      import('./pages/favourites/favourites.module').then(
        (m) => m.FavouritesPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'waiting',
    loadChildren: () =>
      import('./pages/waiting/waiting.module').then((m) => m.WaitingPageModule),
  },
  {
    path: 'board',
    loadChildren: () =>
      import('./pages/board/board.module').then((m) => m.BoardPageModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
