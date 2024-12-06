import React from 'react';

// https://reactjs.org/docs/hooks-reference.html#usestate
const Counter = (props) => {
  // TODO React hooks - useState  命名語法
  const { initCount = 0 } = props;
  const [count, setCount] = React.useState(initCount);
  /* 上面一行等於三面這三行
  const stateArr = React.useState(0);
  const count = stateArr[0];
  const setCount = stateArr[1];
  */

  const atClick = () => {
    // TODO
    // 要改count值，需用setCount 函式
    setCount(count + 1);
  };
  return (
    <div className="border-2 border-black p-4">
      <h2 className="Counter">count:{0}</h2>
      <h2 className="Counter">count:{1}</h2>
      <h2 className="count">count:{count}</h2>

      {/* 當button被onclick時，執行atClick函式 */}
      <button className="button" onClick={atClick}>
        increment
      </button>
    </div>
  );
};

/** // FIXME，三分鐘的隨堂測試
 * 放兩個 Counter Component
 * 一個 count 為 0
 * 另一個 count 為 1
 */
const Example = () => {
  return (
    <section data-name="Example4">
      <Counter />
      <Counter />
    </section>
  );
};
export default Example;
