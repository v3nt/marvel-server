import React from "react";

const Footer = () => {
  return (
    <footer className="p-3 p-md-5 mt-5 bg-light text-sm-start">
      <div className="container">
        <div className="row">
          <ul className="mb-3 list-group  list-group-horizontal">
            <li className="list-group-item">
              <a
                className="nav-item"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/v3nt/marvel-server"
              >
                GitHub Repo
              </a>
            </li>
            <li className="list-group-item ">
              {" "}
              <a
                className="nav-item"
                target="_blank"
                rel="noreferrer"
                href="https://developer.marvel.com/account"
              >
                Marvel API
              </a>
            </li>
          </ul>

          <div className="ml-auto">
            <p className="mt-2">
              Designed and built by :{" "}
              <a
                className="nav-item"
                target="_blank"
                rel="noreferrer"
                href="http://jynk.net"
              >
                Jynk.net
              </a>{" "}
              |{" "}
              <a
                className="nav-item"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/danielcrabbe/"
              >
                LinkedIn
              </a>
            </p>
            <p className="m-0 pl-0 small text-right ">
              Data provided by Marvel. © 2014 Marvel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
