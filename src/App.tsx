import { NavigateFunction, useNavigate } from "react-router-dom";

const App = () => {
  const navigate: NavigateFunction = useNavigate();

  const handleClickCarrucel = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Welcome the work on React</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <button className="btn btn-primary" onClick={handleClickCarrucel}>
            Carucel
          </button>
        </nav>
      </div>
    </div>
  );
};

export default App;
