import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css'],
})
export class BlogItemComponent {
  @Input() title?: string;
  @Input() image?: string;
  @Input() text?: string;
  @Input() id?: number;
  imageLoaded: boolean = false;

  ngOnChanges() {
    this.imageLoaded = false;
  }
  imageLoad() {
    this.imageLoaded = true;
  }
  
}
