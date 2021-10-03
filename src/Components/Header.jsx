import React from "react";

function Header() {
    return (
        <>
        <div className="header__components">
            {/* <img src="/boosted/src/img/revs.png" alt="img"/> */}
            <div className="header__firm">
                <div className="header__name"><h1>Welcome to Boosted USA</h1></div>
                <div className="header__txt"><p>The Holy Grail of Electric Skateboards and One REVolutionary Scooter</p></div>
                    <div className="header__btns">
                        <button className="header__btn">boosted revs</button>
                        <button className="header__btn">boosted boards</button>
                    </div>
            </div>
        </div>
        
        <div className="header__bottom"> 
            <a href="https://electrek.co"><img src="../img/electrek.png" alt="electrek"/></a>
            <a href="https://techcrunch.com"><img src="../img/machinics.png" alt="machinics"/></a>
            <a href="https://www.popularmechanics.com"><img src="../img/tech.png" alt="tech"/></a>
            <a href="https://www.wired.com"><img src="../img/wired.png" alt="wired"/></a>
        </div>
        </>
    )
}

export default Header