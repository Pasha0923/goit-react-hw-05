import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>oops Not Found page</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFoundPage;
