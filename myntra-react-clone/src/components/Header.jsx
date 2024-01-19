import React from 'react'
import { FcBusinessman, FcBookmark, FcBriefcase } from "react-icons/fc";
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"

const Header = () => {
    const bag = useSelector((store) => store.bag);

    return (
        <>
            <header>
                <div className="logo_container">
                    <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
                </div>
                <nav className="nav_bar">
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Kids</a>
                    <a href="#">Home & Living</a>
                    <a href="#">Beauty</a>
                    <a href="#">Studio <sup>New</sup></a>
                </nav>
                {/* <div className="search_bar">
                    <input className="search_input" placeholder="Search for products, brands and more" />
                </div> */}
                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" className="form-control form-control text-bg" placeholder="Search..." aria-label="Search" />
                </form>
                <div className="action_bar">
                    <div className="action_container">
                        {/* <span className="material-symbols-outlined action_icon">person</span> */}
                        <FcBusinessman />
                        <span className="action_name">Profile</span>
                    </div>

                    <div className="action_container">
                        {/* <span className="material-symbols-outlined action_icon">favorite</span> */}
                        <FcBookmark />
                        <span className="action_name">Wishlist</span>
                    </div>

                    <Link className="action_container" to="/bag">
                        {/* <span className="material-symbols-outlined action_icon">shopping_bag</span> */}
                        <FcBriefcase />
                        <span className="action_name bag_icon">Bag</span>
                        <span className="bag-item-count">{bag.length}</span>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header
