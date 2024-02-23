import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiDashboardComponent } from './api-dashboard/api-dashboard.component';
import { SkillCardsComponent } from './skill-cards/skill-cards.component';

export const routes: Routes = [
    {path:"skills", component:DashboardComponent},
    {path:'employee',component:ApiDashboardComponent},
    {path:"skillCard", component:SkillCardsComponent},
    {path:'',redirectTo:'/skillCard', pathMatch:'full'}
];
