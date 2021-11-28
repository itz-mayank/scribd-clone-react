import React from "react";

const MainSec = () => {
    return (
        <>
            <div className="sec1">
                <h2 className="heading1">All in one simple subscription</h2>
                <ul className="list1">
                    <li className="sub-li">
                        <div className="sub-div">
                            <i className="fas fa-book icon"></i>
                            <h3 className="sub-heading">Books</h3>
                        </div>
                    </li>
                    <li className="sub-li">
                        <div className="sub-div">
                            <i className="fas fa-headphones-alt icon"></i>
                            <h3 className="sub-heading">Audiobooks</h3>
                        </div>
                    </li>
                    <li className="sub-li">
                        <div className="sub-div">
                            <i className="fas fa-book-reader icon"></i>
                            <h3 className="sub-heading">Magazines</h3>
                        </div></li>
                    <li className="sub-li">
                        <div className="sub-div">
                            <i className="fas fa-microphone-alt icon"></i>
                            <h3 className="sub-heading">Podcasts</h3>
                        </div>
                    </li>
                    <li className="sub-li">
                        <div className="sub-div">
                            <i className="fas fa-music icon"></i>
                            <h3 className="sub-heading">Sheet Music</h3>
                        </div>
                    </li>
                    <li className="sub-li">
                        <div className="sub-div">
                            <i className="fas fa-file-alt icon"></i>
                            <h3 className="sub-heading">Documents</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MainSec;