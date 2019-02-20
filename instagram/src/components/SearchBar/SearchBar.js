import React from 'react';
import './SearchBar.css';




const SearchBar = () => {
    console.log('SearchBar.js rendering');
    return (
        <div className="searchbar-container">
            <div className="logo-container">
                <img
                    className="camera-logo"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgaGVpZ2h0PSIxMDBweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHdpZHRoPSIxMDBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTcwLDkuOTk5SDMwYy0xMC45OTksMC0yMCw5LjAwMS0yMCwyMHY0MC4wMDJjMCwxMC45OTYsOS4wMDEsMjAsMjAsMjBoNDBjMTAuOTk5LDAsMjAtOS4wMDQsMjAtMjBWMjkuOTk5ICBDOTAsMTksODAuOTk5LDkuOTk5LDcwLDkuOTk5eiBNODMuMzMzLDcwLjAwMWMwLDcuMzUtNS45NzksMTMuMzMzLTEzLjMzMywxMy4zMzNIMzBjLTcuMzUxLDAtMTMuMzMzLTUuOTgzLTEzLjMzMy0xMy4zMzNWMjkuOTk5ICBjMC03LjM1Miw1Ljk4Mi0xMy4zMzMsMTMuMzMzLTEzLjMzM2g0MGM3LjM1NCwwLDEzLjMzMyw1Ljk4MSwxMy4zMzMsMTMuMzMzVjcwLjAwMXoiLz48Y2lyY2xlIGN4PSI3MS42NjciIGN5PSIyOC4zMzIiIHI9IjUiLz48cGF0aCBkPSJNNTAsMjkuOTk5Yy0xMS4wNDgsMC0yMCw4Ljk1My0yMCwyMGMwLDExLjA0Myw4Ljk1MiwyMC4wMDIsMjAsMjAuMDAyYzExLjA0NSwwLDIwLTguOTU5LDIwLTIwLjAwMiAgQzcwLDM4Ljk1Miw2MS4wNDUsMjkuOTk5LDUwLDI5Ljk5OXogTTUwLDYzLjMzNGMtNy4zNjMsMC0xMy4zMzMtNS45Ny0xMy4zMzMtMTMuMzM1UzQyLjYzNywzNi42NjYsNTAsMzYuNjY2ICBzMTMuMzMzLDUuOTY4LDEzLjMzMywxMy4zMzNTNTcuMzYzLDYzLjMzNCw1MCw2My4zMzR6Ii8+PC9zdmc+"
                    alt="camera logo"
                />
                <img
                    className="script-logo"
                    src="https://png2.kisspng.com/sh/7d0bfba0484d53a9d36a5b63fa717134/L0KzQYm3VME0N5pAfZH0aYP2gLBuTfxwb5Cyi9V7aYD3PcXCkPVnaZRqRed8ZYKwfcrtjB51e15rh9D9LXzyd7E0if50fJJsitN2LUXkdIG7WfNkQGo9UNM6LkS1Q4S3V8k2OWY3S6cEOUi1QIa9U8MveJ9s/kisspng-logo-script-typeface-user-myfonts-font-logo-instagram-5ad049cc8988a1.4233079515235998205633.png"
                    alt="script font logo"
                />

            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>

            <div className="icons">
                <i className="fa fa-compass" />
                <i className="fa fa-heart" />
                <i className="fa fa-user-circle" />
            </div>
        </div>
    )
}


export default SearchBar;