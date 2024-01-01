import useTheme from "../context/Theme";

function Header() {
  const { backgroundMode, setBackgroundMode, elementMode, setElementMode } =
    useTheme();
  return (
    <header className={elementMode}>
      <div className="box headcontent">
        <div className="title">
          <h1>Where in the world?</h1>
        </div>
        <div
          className="mode"
          onClick={() => {
            backgroundMode === "dark"
              ? setBackgroundMode("whiteGrey")
              : setBackgroundMode("dark");
            elementMode === "darkGrey"
              ? setElementMode("white")
              : setElementMode("darkGrey");
          }}
        >
          <div className="icon">
            {backgroundMode === "dark" ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-regular fa-moon"></i>
            )}
          </div>
          {backgroundMode === "dark" ? <p>Light Mode</p> : <p>Dark Mode</p>}
        </div>
      </div>
    </header>
  );
}

export default Header;
