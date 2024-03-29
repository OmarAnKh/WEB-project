import React from 'react';
import '../../OmarCompStyle.css';

const PostNavbar = () => {
    return (
        <div className="container-fluid" style={{ padding: "0px" }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <a className="navbar-brand-omar navbar-brand" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-megaphone-fill" viewBox="0 0 16 16">
                        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
                    </svg>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >

                    <span className="navbar-toggler-icon"></span>
                </button>


                <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="🔍Search.."


                        />
                    </form>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#" role="button" aria-expanded="false">Overview</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" role="button" aria-expanded="false">Subscriptions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" role="button" aria-expanded="false">Streams</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" role="button" aria-expanded="false">Library</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon-item bi bi-gear-fill" viewBox="0 0 16 16" style={{ background: "transparent" }}>
                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                            </svg></div>
                        </li>
                        <li className="nav-item">
                            <div className='icon-item'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon-item bi bi-bell-fill" viewBox="0 0 16 16" style={{ background: "transparent" }}>
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                            </svg></div>
                        </li>
                        <li className="nav-item">
                            <div className="img">
                                <img
                                    src="https://graphicriver.img.customer.envatousercontent.com/files/462528845/preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=540f80bfc443b4c703e508e6a7a6321b"
                                    width="50"
                                    height="50"
                                    alt="User"
                                    style={{ marginRight: "5px", borderRadius: "5%" }}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default PostNavbar;