import React from 'react';
function Footer() {
    return (
        <div className="container-xxl px-4 mt-5 mb-4">
            <div className="bg-body rounded p-4">
                <div className="row text-dark">
                    <div className="col-lg-8">
                        <ul className="nav lh-1">
                            <li className="nav-item me-3">About</li>
                            <li className="nav-item me-3">Support</li>
                            <li className="nav-item me-3">Docs</li>
                            <li className="nav-item me-3">Privacy & Terms</li>
                        </ul>
                        <p className='mb-0 mt-4'>
                            © 2023 Webistica All rights reserved Supposing so be resolving breakfast am or perfectly. Is drew am hill from
                            me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported.
                        </p>
                    </div>
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="d-flex justify-content-lg-end">
                            <div className="mb-2">
                                <a href="https://www.apple.com/lae/app-store/">
                                    <img
                                        className="img-fluid h-50px"
                                        src="https://media.discordapp.net/attachments/1177632301807587401/1184542694496817162/image.png?ex=658c5a5a&is=6579e55a&hm=e32347627bc2b218c1b8069a572f6e58068679b9d209b202131ccb7b1dc1aff2&=&format=webp&quality=lossless&width=380&height=118"
                                        alt="app-store"
                                        width={180}
                                    />
                                </a>
                            </div>
                            <div className="mb-2 ms-2">
                                <a href="https://play.google.com/store/apps/">
                                    <img
                                        className="img-fluid h-50px"
                                        src="https://media.discordapp.net/attachments/1177632301807587401/1184542703858487296/image.png?ex=658c5a5c&is=6579e55c&hm=324f160941d72c6c10e1574e7d8b6fbbad8c748be3d90a6bfe37e3bf2125d0de&=&format=webp&quality=lossless&width=450&height=123"
                                        alt="google-play"
                                        width={200}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;