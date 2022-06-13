import { ImFacebook, ImGithub, ImLinkedin2 } from "react-icons/im";

import "./SocialIcons.scss";

const SocialIcons = () => {
  return (
    <div className="socila-icons">
      <a
        target="__blank"
        style={{ color: "#eee" }}
        href="https://www.facebook.com/andrawijaya170798"
        className="socila-icons__icon"
      >
        <ImFacebook />
      </a>
      <a
        target="__blank"
        style={{ color: "#eee" }}
        href="https://github.com/andrawijaya"
        className="socila-icons__icon"
      >
        <ImGithub />
      </a>
      <a
        target="__blank"
        style={{ color: "#eee" }}
        href="https://www.linkedin.com/in/andra-wijaya-663582135/"
        className="socila-icons__icon"
      >
        <ImLinkedin2 />
      </a>
    </div>
  );
};

export default SocialIcons;
