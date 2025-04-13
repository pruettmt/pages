import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <h2 ><Link to="/">About</Link> / <Link to="/blog">Docs</Link></h2>
      <p>Coming soon.</p>
    </div>
  );
}
