// グローバルの空間に変数や関数をセットしている。（即時関数にしてもよい）
function todo() {
  // 入力したTodoタスクの一覧を保持する配列を定義する
  const todos = [];
 
  /* HTMLのID値を使ってDOM要素を取得する */
  //  1 テキストボックス(input[type="text"])を要素を取得する。　ここでは、[input-todo-box]
  //  2 追加ボタン(button要素)を要素を取得する。   　ここでは、[add-button]
  //  3 Todoリストを一覧表示するul要素を取得する。　ここでは、[todo-list]
  const inputBox = document.getElementById('input-todo-box');
  const addButton = document.getElementById('add-button');
  const todoList = document.getElementById('todo-list');

  /*「追加」ボタンがクリックされたときの処理 */
  addButton.addEventListener('click', (event) => {
    //   テキストボックスに入力されたテキストの値を取り出して、Todoリスト一覧に追加する
    //   取り出したらテキストボックスの中を空にする
    const text = inputBox.value;
    inputBox.value = '';
 
    //level3-10 [配列の要素を変更しよう]　push()要素を参考に配列でテキストの値を追加する。
    //showTodos()関数で再表示
    todos.push(text);
    showTodos();
  });
 
  /* 「todos」の中身を一覧表示する */
  function showTodos() {
    //    - ul要素にli要素(createElement)を追加して、li要素内にtodoタスクの内容を表示する
    //TodoリストをforEach繰り返しにして作成する
    todos.forEach((text, index) => {
 
      const listItem = document.createElement('li');
      //appendChildを使ってノードを追加する
      listItem.textContent = `${text}`;
      todoList.appendChild(listItem);

      //　リストのli要素内に削除ボタンをつける（document.createElement('button');）
      const delateButton = document.createElement('button');
      delateButton.textContent = '削除';
      //削除をクリックされた時、showTodos()関数で削除する]]
      delateButton.addEventListener('click', (event) => {
        listItem.remove();
      });
      listItem.appendChild(delateButton);
    });
  }
}
 
/*　実行される関数 */
todo();