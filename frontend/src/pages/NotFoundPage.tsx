import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Page is not found</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
