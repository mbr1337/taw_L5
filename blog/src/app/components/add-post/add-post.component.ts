import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  public data = {
    title: '',
    imgURL: '',
    text: '',
  };
  public logged?: boolean;
  public logout?: boolean;
  constructor(public dataService: DataService, private router: Router) {}

  ngOnInit(): void {}
  sendPost() {
    this.dataService.addPost(this.data).subscribe(
      (result) => {
        if (!result) {
          this.logged = false;
        } else {
          this.logout = false;
          this.data.title = '';
          this.data.imgURL = '';
          this.data.text = '';
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
