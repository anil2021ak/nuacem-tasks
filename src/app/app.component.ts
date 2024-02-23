import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiDashboardComponent } from "./api-dashboard/api-dashboard.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,
        NavbarComponent,
        DashboardComponent,
        HttpClientModule,
        
        CommonModule,
        FormsModule, ApiDashboardComponent]
})
export class AppComponent {
  title = 'uiCrud';
}
