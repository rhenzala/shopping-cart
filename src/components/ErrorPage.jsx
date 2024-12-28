import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn&apos;t exist!</h1>
      <Link to="/">
        <button>
          <ArrowLeft size={24} />
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
