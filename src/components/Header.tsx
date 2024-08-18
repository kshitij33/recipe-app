import { Link } from "@tanstack/react-router";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="m-4">
        <p>Logo</p>
      </div>
      <ul className="flex">
        <li className="m-4">
          <Link
            to="/"
            activeProps={{
              style: {
                fontWeight: "bold",
              },
            }}
          >
            Home
          </Link>
        </li>
        <li className="m-4">
          <Link
            to="/recipeformpage"
            activeProps={{
              style: {
                fontWeight: "bold",
              },
            }}
          >
            Add Recipe
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
