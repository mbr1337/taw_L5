import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://localhost:3001';
  constructor(private http: HttpClient) {}
  public blogRefreshed: EventEmitter<number> = new EventEmitter<number>();
  postDeleted = new EventEmitter<number>();
  getAll() {
    return this.http.get(this.url + '/api/posts');
  }
  getById(id: string) {
    return this.http.get(this.url + '/api/posts/' + id);
  }
  addPost(postData: any) {
    console.log(postData);
    return this.http.post(this.url + '/api/addPost', postData);
  }
  editPost(postData: any, id: string) {
    console.log(postData);
    return this.http.put(this.url + '/api/editPost/' + id, postData);
  }
  // Metoda .pipe() w Angular służy do łączenia wielu operatorów razem w celu utworzenia łańcucha operacji na obserwowalnym strumieniu.
  // Każdy operator w łańcuchu wykonuje określone zadanie lub transformację danych emitowanych przez obiekt observable.
  // tutaj .pipe() służy do łączenia operatorów w łańcuchy i wykonywania dodatkowych akcji po wysłaniu żądania HTTP DELETE.
  // Operator tap() umożliwia wykonywanie efektów ubocznych lub działań na emitowanych wartościach z observable bez modyfikowania samych wartości.
  removePost(id: number) {
    return this.http.delete(this.url + '/api/removePost/' + id).pipe(
      tap(() => {
        this.postDeleted.emit(id);
        this.blogRefreshed.emit();
      })
    );
  }
}
