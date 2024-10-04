import { ArmakuniLogomark } from "../brands/armakuni/ArmakuniLogomark";
import React from "react";

export const NavBar = () => {
  return (
    <div className="navbar bg-primary text-primary-content" role="navigation">
      <div className="navbar-start">
        <div className="flex-1">
          <a className="btn-ghost btn text-xl normal-case" href="/">
            <ArmakuniLogomark className="h-18 w-12" />
            <span className={"hidden md:inline"}>&nbsp;The AK Way</span>
          </a>
        </div>
      </div>
    </div>
  );
};
