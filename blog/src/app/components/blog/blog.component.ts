import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit, OnDestroy {
  @Input() filterText: string = '';
  public items$: any;
  private postDeletedSubscription?: Subscription;
  private blogRefreshedSubscription?: Subscription;
  constructor(private service: DataService) {}
  ngOnInit() {
    this.getAll();
    this.postDeletedSubscription = this.service.postDeleted.subscribe(
      (postId: number) => {
        console.log('Post deleted:', postId);
        this.items$ = this.items$.filter((item: any) => item.id !== postId);
      }
    );
    this.blogRefreshedSubscription = this.service.blogRefreshed.subscribe(
      () => {
        this.getAll();
      }
    );
  }
  getAll() {
    this.service.getAll().subscribe((response) => {
      this.items$ = response;
    });
  }
  refreshComponent() {
    this.getAll();
  }
  ngOnDestroy() {
    if (this.postDeletedSubscription) {
      this.postDeletedSubscription.unsubscribe();
    }
    if (this.blogRefreshedSubscription) {
      this.blogRefreshedSubscription.unsubscribe();
    }
  }
}
