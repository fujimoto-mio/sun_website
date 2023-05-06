// グローバルの空間に変数や関数をセットしている。（即時関数にしてもよい）
function todo() {
    // 入力したTodoタスクの一覧を保持する配列を定義する
    const todo_array =[];
   
    /* HTMLのID値を使ってDOM要素を取得する */
    //  1 テキストボックス(input[type="text"])を要素を取得する。ここでは、[input-todo-box]
      const inputBox = document.getElementById('input-todo-box');//入力文字
    //  2 追加ボタン(button要素)を要素を取得する。   ここでは、[add-button]は addButtonと紐付けする！
      const addButton = document.getElementById('add-button');//追加
    //  3 Todoリストを一覧表示するul要素を取得する。ここでは、[todo-list]
      const addTaskTarget = document.getElementById('todo-list');//表示
  
    /*「追加」ボタンがクリックされたときの処理 */
    addButton.addEventListener('click', (event) => {
      // 一つ追加todo //todoは入力した文字とつながりあり、、
      let count = event.detail;
      console.log('Click count is ' + count+'1');

      const todos = { comment: inputBox.value,  };
      //inputBoxは空にする
      inputBox.focus();
      inputBox.value = '';
     //push()要素を参考に配列でテキストの値を追加する。
      //これで入力した文字がconsole内表示される
      todo_array.push(todos);
      console.log(todo_array);
      //showTodos()関数で再表示
      showTodos();   
   
    });

/* 「todos」の中身を一覧表示する */
function showTodos() {
  //    - ul要素にli要素(createElement)エリアを追加して、li要素内にtodoタスクの内容を表示する
  //addTaskTargetの中のli空
  addTaskTarget.textContent= '';

//console.log(tableId);
 todo_array.forEach((todos, index) => {
    //tableIdはli  ●
    const tableId = document.createElement('li');
    addTaskTarget.appendChild(tableId);//tableIdはaddTaskTarget内にあり

    //テキスト表示内容
    var todo_length = todos.comment;
    tableId.textContent =todo_length;
    

    var deleteTodo_buttun = document.createElement('button');  
    deleteTodo_buttun.textContent = '削除';
    //tableIdのところに削除ボタンの追加
    tableId.appendChiled(deleteTodo_buttun);
    //削除（deleteTodo）をクリックされた時、showTodos()関数で削除する
    deleteTodo.addEventListener('click', () => {
      deleteTodo(index);
    });
  });
}

/* todoの内容を削除する */
// Todo情報を表すli要素(showTodo関数で作成される要素)の中にある削除ボタン[deleteTodo]をクリックしたら実行される。
function deleteTodo(index) {
  //   1- todosから対応するtodo情報を削除する
  //   2- 引数はindexを受け取る(インデックス番号) level3-10参考に、ここでは、splice()を使います。
  const todo = [inputBox];
  todo.splice(index,1);
  //   3- 削除後はshowTodosを実行して、Todoリストを再表示させる
  showTodos()

}

}

/*実行される関数 */
todo();