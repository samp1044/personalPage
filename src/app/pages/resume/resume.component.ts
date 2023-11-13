import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarkdownComponent} from "ngx-markdown";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, MarkdownComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  preserveWhitespaces: true
})
export class ResumeComponent {

}
