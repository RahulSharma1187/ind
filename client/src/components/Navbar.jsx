import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import "./navbar.css"
import { useState } from "react";
import { Button } from "@mui/material";
import BookSrceBox from "./BookServiceBox";
import { useAuth0 } from "@auth0/auth0-react";

import { useSelector, useDispatch } from 'react-redux';
import { openBookServiceBox, closeBookServiceBox, startAnimateBox, stopAnimateBox } from '../features/bookService/bookServiceSlice';


export const Navbar = () => {
    const { user, loginWithRedirect , isAuthenticated, logout } = useAuth0();
    const [searchBox, setSearchBox] = useState(false);
    // const [bookServiceBox, setBookServiceBox] = useState(false);
    // const [animateBox, setAnimateBox] = useState(false);

    const dispatch = useDispatch();
    const { isBookServiceBoxOpen, animateBox } = useSelector(state => state.bookService);

    const handlesearchBox = () => {
        setSearchBox(true);
    }
    const handleSearchBoxClose = () => {
        setSearchBox(false);
    }

    const handleBookService = () => {
        // setBookServiceBox(true);
        dispatch(openBookServiceBox());
        setTimeout(() => {
            // setAnimateBox(true);
            dispatch(startAnimateBox());
        }, 500);
    }

    const handleBookServiceBoxBg = () => {
        // setAnimateBox(false);
        dispatch(stopAnimateBox());
        setTimeout(() => {
            // setBookServiceBox(false);
            dispatch(closeBookServiceBox());
        }, 500);
    }

    return(
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <a href="#">Logo</a>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/meetTheFounder">Meet the founder</NavLink></li>
                            <li><NavLink to="/services">services</NavLink></li>
                            <li><NavLink to="/scienceResearch">science & research</NavLink></li>
                            <li><NavLink to="/contactUs">contact us</NavLink></li>
                        </ul>
                    </nav>
                    <div className="topSearch"> 
                        <Button variant="contained" className="bookServiceBtn" onClick={handleBookService}>Book a Service</Button>
                        <SearchIcon className="searchBtn" onClick={handlesearchBox}/>                 
                        <div className="login">
                            {
                                isAuthenticated && <span> {user.name} </span>
                            }
                            {
                                isAuthenticated ? (
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                                ) : (
                                    <button onClick={() => loginWithRedirect()}>Log In</button>
                                ) 
                            }
                        </div>
                    </div>

                    {
                        searchBox === true ? <div className="searchBox">
                            <label>
                                <input type="text" placeholder="Lorem Ipsum Dolors" />
                            </label>
                            <div class="searchBoxClose" onClick={handleSearchBoxClose}></div>
                        </div> : ""
                    }
                    
                </div>
            </header>

            {/* { 
                bookServiceBox === true ? <div className="bookServiceBoxBg" onClick={handleBookServiceBoxBg}></div> : ""
            }
            {
                bookServiceBox === true ? 
                <div className={`bookServiceBox ${animateBox ? 'bookServiceBoxAnim' : ''}`}>
                    <div className="bookServiceBoxClose" onClick={handleBookServiceBoxBg}>X</div>
                    <BookSrceBox />
                </div> : ""
            } */}


            {isBookServiceBoxOpen && (
                <>
                    <div className="bookServiceBoxBg" onClick={handleBookServiceBoxBg}></div>
                    <div className={`bookServiceBox ${animateBox ? 'bookServiceBoxAnim' : ''}`}>
                        <div className="bookServiceBoxClose" onClick={handleBookServiceBoxBg}>X</div>
                        <BookSrceBox />
                    </div>
                </>
            )}
        </>
    )
}