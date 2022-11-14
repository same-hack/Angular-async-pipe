import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// User型
export interface User {
  name: String;
  age: number;
  job: String;
}

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss'],
})
export class AsyncPipeComponent {
  // 初期値用
  data = {
    name: 'サメハック',
    age: 29,
    job: 'エンジニア',
  };

  // ユーザの持つ値を保管する
  //  | asyncを使ったので購読(subscribe),購読解除(unsubscribe)が不要
  user$ = new BehaviorSubject<User>(this.data);
}
