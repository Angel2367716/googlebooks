import React from "react";
import "./Navbar.css"

function Nav(){
  return (
      <header className="toolbar">
        <nav className="toolbar-navigation">

                {/* ------------  Logo ------------ */}
                <div className="toolbar-logo">
                  <a href="/">
                    Google Books
                  </a>
                </div>
                <div className="nav-spacer" />

                <div className="toolbar-nav-items">
                  <ul>
                    <li>    
                      <a href="/saved">
                      Saved Books
                      </a>
                    </li>

                    <li>
                      <a href="/search">
                      Search
                      </a>
                    </li>
                  </ul>
                </div>
        </nav>
    </header> 
  );
}

export default Nav;
