// Importing necessary modules
import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                        {/* I can Add more NavLink items for other pages */}
                    </ul>
                </nav>
            </header>
            <main>
                <section className="hero">
                    <div className="hero-content">
                        <h1>Welcome to our E-commerce Website</h1>
                        <p>Discover the best deals and products here.</p>
                        <NavLink to="/shop" className="btn btn-primary">Shop Now</NavLink>
                    </div>
                </section>
                {/* I can Add more sections or content as needed */}
            </main>
            <footer>
                <p>&copy; 2024 E-commerce Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
