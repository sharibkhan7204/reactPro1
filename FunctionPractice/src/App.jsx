const App = () => {
  function inputChanging(elem) {
    console.log(elem);
  }

  console.log("rendered");
  return (
    <div>
      <input
        onChange={function (elem) {
          inputChanging(elem.target.value);
        }}
        type="text"
        placeholder="Enter Name"
      />

      <div
        onMouseEnter={() => console.log("entered")}
        onMouseMove={(e) => console.log("moving", e.pageX)}
        onMouseOver={() => console.log("over")}
        className="box"
      ></div>
    </div>
  );
};

export default App;
