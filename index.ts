var title: string = 'Angular';
title = 'Angular!';

var n: number = 9;

var isOpen: boolean = true;

// 配列型
var keywords: (string | number)[] = ['name', 'email', 'body', 0];

// タプル型
var payment: [number, string, number] = [1, 'apple', 0];

// オブジェクト型
var object: { [key: string]: string } = {
  name: 'Yamada',
  id: 'test',
};
var post: object = [{ id: 12, content: 'lorem ipsum' }];

// 共用型（union型）
var sample: string | number | boolean;
sample = 'Yamada';
sample = 0;
sample = true;

// enum型（定数を定義してグループにする）
enum KeyCode {
  Backspace = 8,
  Tab = 9,
  Enter = 13,
}
console.log(KeyCode.Enter);

enum ErrorCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
}
console.log(ErrorCode.OK);

enum Character {
  Bob,
  Dad,
  Mom,
}
console.log(Character.Bob);

// any型
var something: any = 'foo';
something = 1;
something = true;
something = { id: 1 };

/// null, undefined型
var el: Element | null = document.querySelector('#app');
var foo: undefined = undefined;

// 型推論
var unknown = 'string';
unknown = 10;
