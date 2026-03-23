import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
    selector: 'app-navigation',
  imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
