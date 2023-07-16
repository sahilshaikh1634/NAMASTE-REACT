const Header = () => {
    return (
        <div className="header">
            <a href="/"><img className="logo" src="https://static.wikia.nocookie.net/logopedia/images/1/1f/Food_Food.png"/></a>
            <div className="nav-item">
                <ul >
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;