import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarkdownModule} from "ngx-markdown";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
