function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <img src="/logo.png" alt="Sri Lakshmi Store Logo" />
                <span>Kalyani Kart</span>
            </div>

            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/billing">Billing</a>
                <a href="/customers">Customers</a>
                <a href="/about">About</a>
            </div>

        </nav>
    );
}

export default Navbar;