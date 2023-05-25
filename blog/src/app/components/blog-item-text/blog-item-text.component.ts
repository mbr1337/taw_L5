import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'blog-item-text',
  templateUrl: './blog-item-text.component.html',
  styleUrls: ['./blog-item-text.component.css'],
})
export class BlogItemTextComponent {
  @Input() text?: string;
  @Input() id?: number;
  @Output() postDeleted = new EventEmitter<number>();
  constructor(private service: DataService, private router: Router) {}
  deletePost() {
    if (this.id !== undefined) {
      this.service.removePost(this.id).subscribe(
        () => {
          console.log('Post deleted successfully');
          // Emit the deleted post ID
          this.postDeleted.emit(this.id);
        },
        (error) => {
          console.log('Failed to delete post:', error);
        }
      );
    } else {
      console.log('Post ID is undefined');
    }
  }
}
