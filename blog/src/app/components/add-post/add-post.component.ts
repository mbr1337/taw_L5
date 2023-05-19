import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
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
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  sendPost() {
    this.authService.addPost(this.data).subscribe(
      (result) => {
        if (!result) {
          this.logged = false;
        } else {
          this.logout = false;
          this.data = {
            title: '',
            imgURL: '',
            text: '',
          };
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
