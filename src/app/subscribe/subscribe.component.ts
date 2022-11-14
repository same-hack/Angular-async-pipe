import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';

// User型
export interface User {
  name: String;
  age: number;
  job: String;
}

@Component({
  selector: 'app-subscribe ',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  // 初期値用
  data = {
    name: 'サメハック',
    age: 29,
    job: 'エンジニア',
  };

  // ユーザの持つ値を保管する
  user$ = new BehaviorSubject<User>(this.data);

  // | async を使わない場合の記述
  myUser: User;

  ngOnInit(): void {
    // subscribeして値を購読する必要あり
    this.user$.subscribe((res) => {
      this.myUser = res;
    });
  }

  ngOnDestroy(): void {
    // 購読を解除
    this.user$.unsubscribe();
  }
}
