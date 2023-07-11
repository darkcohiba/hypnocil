import React from "react"

function Header({setSearchTerm}) {
    return(
        <header>
            <div>
                <img src="./images/hypnocil-logo.png"/>
                <h1>Clinical Trials</h1>
            </div>
            <input onChange={(event) => setSearchTerm(event.target.value)} id="search" type="text" placeholder="Search..."></input>
        </header>
    );
}

export default Header;