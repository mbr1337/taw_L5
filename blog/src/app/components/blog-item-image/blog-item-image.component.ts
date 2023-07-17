import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-item-image',
  templateUrl: './blog-item-image.component.html',
  styleUrls: ['./blog-item-image.component.scss'],
})
export class BlogItemImageComponent {
  @Input() image?: string;
}
