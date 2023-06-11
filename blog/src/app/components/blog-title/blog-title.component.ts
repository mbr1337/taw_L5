import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-title',
  templateUrl: './blog-title.component.html',
  styleUrls: ['./blog-title.component.scss'],
})
export class BlogTitleComponent {
  @Input() title?: string;
}
