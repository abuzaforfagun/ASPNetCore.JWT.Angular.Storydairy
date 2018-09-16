import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { StoriesComponent } from 'src/app/stories/stories.component';
import { StoryFormComponent } from './story-form/story-form.component';


const appRoutes: Routes = [
    { path: 'stories', component: StoriesComponent },
    { path: 'stories/form', component: StoryFormComponent },
    { path: 'stories/form/:id', component: StoryFormComponent },
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
