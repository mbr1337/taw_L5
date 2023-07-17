import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss','../../app.component.scss'],
})
export class AddPostComponent {
  public data = {
    title: '',
    imgURL: '',
    text: '',
  };
  constructor(public dataService: DataService, private router: Router) {}

  sendPost() {
    this.dataService.addPost(this.data).subscribe(
      (result) => {
        if (result === null || result === undefined) {
          console.log('Data error. Data is either null or undefined');
        } else {
          this.data.title = '';
          this.data.imgURL = '';
          this.data.text = '';
          this.router.navigate(['/blog']);
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
