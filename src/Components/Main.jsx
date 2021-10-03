import React from 'react'

function Main () {
    return (
        <>
        <div className="main">
            <div className="main__txt">
                <div className="main__tech"><p>Looking for Boosted Boards, or Boosted Revs?</p></div>
                <div className="main__conf"><p>Boosted USA acquired all of the remaining inventory directly from Boosted.  This means we have the electric skateboards and scooter you all love and have been looking for.  Get your hands on these highly sought after products while supplies last.</p></div>
            </div>
            <div className="border"></div>
        </div>

        <div className="main__shop">
            <div className="main__boards">
                <h3>Shop Boosted Boards</h3>
                <p>In Stock</p>
            </div>
            <div className="main__revs">
                <h3>Shop Boosted Revs</h3>
                <p>In Stock</p>
            </div>
        </div>

        <div className="main__skate">
            <div className="main__txt__skate">
                <p>High-performance</p>
                <h3>Electric Skateboards</h3>
                <p>Cruising campus, going to work or getting through that long list of errands has never been easier or more fun.</p>
                <button className="btn__skate">Shop Now</button>
            </div>
        </div>

        <div className="main__rev">
            <div className="block__rev">
                <div className="block__rev__left"></div>
                <div className="block__rev__leftr"></div>
            </div>
            <div className="main__rev__txt">
                <h3>Boosted Rev</h3>
                <p>There's never been an electric scooter quite like this. Speed past traffic at 24 mph. Go up to 22 miles on a single charge. You'll get there in no time at all. Stop and go with the roll of your thumb. Its intuitive design means there’s almost no learning curve.</p>
                <button>Shop Now</button>
            </div>
        </div>

        <div className="main__shop__skate">
            <div className="main__block__img__l">
                <h3>Shop Boosted Stealth</h3>
                <p>IN STOCK</p>
            </div>
            <div className="main__block__img__m">
                <h3>Shop Boosted Plus</h3>
                <p>IN STOCK</p>
            </div>
            <div className="main__block__img__r">
                <h3>Shop Boosted Mini</h3>
                <p>IN STOCK</p>
            </div>
        </div>

        <div className="main__video">
            <iframe allowfullscreen width="540" height="300" src="https://www.youtube.com/embed/78bXV1ZqQWI?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe allowfullscreen width="540" height="300" src="https://www.youtube.com/embed/akHkpnZQEnE?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className="main__accessories">
            <h3>Looking for Accessories?</h3>
                <div className="acces__block"></div>
                <div className="acces__shop">
                    
                </div>
        </div>

        <div className="main__block__nothing">
            
        </div>

        <div className="main__info">
            <div className="block__info__1">
                <h3>Go Fast</h3>
                <p>Boosted is known for its premium performance boards offering a next-level experience.</p>
            </div>
            <div className="block__info__2">
                <h3>Go Far</h3>
                <p>With optional extended battery life, you can get wherever you need to go reliably.</p>
            </div>
            <div className="block__info__3">
                <h3>Go Safe</h3>
                <p>Safety is a #1 priority for Boosted, always wear a helmet when riding.</p>
            </div>
            <div className="block__info__4">
                <h3>Built to Last!</h3>
                <p>Boosted products are engineered to last for years and are extremely reliable.</p>
            </div>
        </div>

        <div className="main__full__info">
            <div className="finish__l"></div>
            <div className="finish__m">
                <p><b>Explore</b></p>
                <a href="Electric Skateboards">Electric Skateboards</a>
                <a href="Electric Skateboards">Electric Scooters</a>
                <a href="Electric Skateboards">Accessories</a>
                <a href="Electric Skateboards">FAQs</a>
                <a href="Electric Skateboards">Contact</a>
                <a href="Electric Skateboards">Gift Card</a>
            </div>
            <div className="finish__r">
                <p><b>About Boosted USA</b></p>
                <p>Boosted empowers people everywhere to commute across their cities, campuses, and communities in ways that were never before possible. Boosted is solving one of the biggest problems people face each day: transportation.</p>
                <p>CaliRides LLC - DBA Boosted USA</p>
                <p>1281 Andersen Drive Ste. K</p>
                <p>San Rafael, CA 94901</p>
            </div>
        </div>
        </>
    )
}

export default Main