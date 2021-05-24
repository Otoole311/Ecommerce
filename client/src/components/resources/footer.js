import React from 'react';
import '../../css/resources/Footer.css';

export function Footer(){
    return(
        <footer className="footer fixed-bottom">
            <div className="row">
                {/* About us */}
                <div className="col-sm">
                    <p>Location: Teshie/Spintex</p>
                </div>

                {/* contacts */}
                <div className="col-sm">
                    <p>Tel: +233 26 070 3232 / +233 57 948 3951</p>
                </div>

                {/* Links */}
                <div className="col-sm">
                    <p>Follow Us: Facebook, Instagram</p>
                </div>
            </div>
        </footer>
    );
}