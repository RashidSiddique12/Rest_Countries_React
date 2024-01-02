import ErrorImg from "../assets/404-error.svg";

function PageNotFound({ message }) {
  return (
    <div className="handler">
      <img src={ErrorImg} alt="Not found Error image" />
      <p>{message}</p>
    </div>
  );
}

export default PageNotFound;
