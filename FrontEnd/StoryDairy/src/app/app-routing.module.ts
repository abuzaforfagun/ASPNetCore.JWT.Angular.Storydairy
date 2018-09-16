import { NewstoryComponent } from './newstory/newstory.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { StoriesComponent } from 'src/app/stories/stories.component';


const appRoutes: Routes = [
    { path: 'stories', component: StoriesComponent },
    { path: 'stories/form', component: NewstoryComponent },
    { path: 'stories/form/:id', component: NewstoryComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/stories', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
