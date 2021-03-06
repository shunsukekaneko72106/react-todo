import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //input
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //未完了のtodo
  const [incompleteTodos, setIncompleteTodos] = useState([
    "テストテスト",
    "hogehoge"
  ]);
  //完了のtodo
  const [completeTodos, setCompleteTodos] = useState(["uuuu", "eeee"]);
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
          <div className="list-row">
            <li>hogehoge</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}

          <div className="list-row">
            <li>hogehoge</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
