import "./App.css";
import { useState, useEffect } from "react";
import FeedbackForm from "./FeedbackForm";

//Exercise 1
function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;

//Exercise 2
const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
  <button className={`Button ${className}`} {...buttonProps}>
    {children}
  </button>
  );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
  return(
  <Button
    type="secondary"
    {...buttonProps}
    onClick={() => {
      alert("Logging in!");
    }}
    >
      {children}
    </Button>
  )
}

  function App() {
    return(
      <div className="App">
        <header className="Header">Little Lemon Restaurant</header>
        <Button type="primary" onClick={() => alert("Signing up")}>
          Sign Up
        </Button>
        <LoginButton type="secondary" onClick={() => alert("Signing Up")}>
          Login
        </LoginButton>
      </div>
    )
  }

  export default App;

//Exercise 3
const withMousePosition = (WrappedComponent) => {
  return(props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    })
    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", handleMousePositionChange);

      return() => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      }
    }, [])
    return <WrappedComponent {...props} mousePosition={mousePosition}/>
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return(null)
  }
  return(
    <div className="BasicTracker">
      <p>Mouse Position:</p>
      <div className="row">
      <span>x: {mousePosition.x}</span>
      <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

  const PointMouseLogger = ({ mousePosition }) => {
    if(!mousePosition) {
      return null;
    }
    return (
      <p>
        ({ mousePosition.x }, {mousePosition.y})
      </p>
    ); 
  };

  const PanelMouseTracker = withMousePosition(PanelMouseLogger);
  const PointMouseTracker = withMousePosition(PointMouseLogger);

  function App() {
    return(
      <div className="App">
        <header className="Header">Little Lemon Restaurant</header>
        <PanelMouseTracker />
        <PointMouseTracker />
      </div>
    );
  }

  export default App;

//Exercise 4
 const DataFetcher = ({render, url}) => {
  const [data, setData] = useState([]);

  useEffect (() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, []);

  return render(data);
 };

 const DessertCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}/>
  )
 }

 export default App;

function App() {
  const handleSubmit = () => {
    console.log('Form submitted');
  }

  return (
    <div>
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  )
}

  export default App;