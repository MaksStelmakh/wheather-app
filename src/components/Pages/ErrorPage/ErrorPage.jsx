import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Oops page does not exist</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default ErrorPage;
