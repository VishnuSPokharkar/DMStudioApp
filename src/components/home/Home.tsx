import React from "react";

const Home = (props) => {
  // const name = "vishnu";
  // const visible = true;
  const [isVisible, setIsVisible] = React.useState(props.visible);
  const handleShow = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <button onClick={handleShow}>Show me</button>
      Home {props.name} {2 + 2}{" "}
      {isVisible ? <h1>I'm Visible</h1> : <h1>I'm not visible</h1>}
    </div>
  );
};

export default Home;
