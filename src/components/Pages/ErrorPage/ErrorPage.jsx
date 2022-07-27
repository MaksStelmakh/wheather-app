import { Link } from "react-router-dom";
import { ErrorText } from "./ErrorPage.styled";

const ErrorPage = () => {
  return (
    <ErrorText>
      <h1>404</h1>
      <p>Oops page does not exist</p>
      <Link to="/">Go Back</Link>
    </ErrorText>
  );
};

export default ErrorPage;
