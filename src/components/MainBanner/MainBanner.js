import { Link } from "react-router-dom";

import "./MainBanner.scss";

const MainBanner = () => {
  return (
    <div className="banner">
      <div className="banner__hero">
        <h1 className="banner__title">
          <br />
          Online Shopping
          <br />
          Let's Started
        </h1>
        <Link to="/products" className="btn btn-black">
          go to store
        </Link>
      </div>
    </div>
  );
};

export default MainBanner;
