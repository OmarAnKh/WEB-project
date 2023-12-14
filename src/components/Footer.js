import React from 'react'
function Footer() {

    return (
        <div className="container-xxl px-4 mt-5 mb-4">
            <div className="bg-body rounded p-4">
                <div className="row text-dark">
                    <div className="col-8">

                        <ul className="nav lh-1">
                            <li style={{ marginRight: '15px', display: 'inline-block' }}>About</li>
                            <li style={{ marginRight: '15px', display: 'inline-block' }}>Support</li>
                            <li style={{ marginRight: '15px', display: 'inline-block' }}>Docs</li>
                            <li style={{ marginRight: '15px', display: 'inline-block' }}>Privacy & Terms</li>
                        </ul>

                        <p className='mb-0 mt-4'>
                            © 2023 Webistica All rights reserved Supposing so be resolving breakfast am or perfectly. Is drew am hill from
                            me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex justify-content-md-end">
                            <a href="https://www.apple.com/lae/app-store/">
                                <img
                                    className="h-50px"
                                    src="https://media.discordapp.net/attachments/1177632301807587401/1184542694496817162/image.png?ex=658c5a5a&is=6579e55a&hm=e32347627bc2b218c1b8069a572f6e58068679b9d209b202131ccb7b1dc1aff2&=&format=webp&quality=lossless&width=380&height=118"
                                    alt="app-store"
                                    width={180}
                                />
                            </a>
                            <a href="https://play.google.com/store/apps/">
                                <img
                                    className="h-50px ms-2"
                                    src="https://media.discordapp.net/attachments/1177632301807587401/1184542703858487296/image.png?ex=658c5a5c&is=6579e55c&hm=324f160941d72c6c10e1574e7d8b6fbbad8c748be3d90a6bfe37e3bf2125d0de&=&format=webp&quality=lossless&width=450&height=123"
                                    alt="google-play"
                                    width={200}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer