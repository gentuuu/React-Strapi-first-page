import React from 'react';
import '../css/Footer.scss';

export default function Footer() {
  return (
    <>
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="" alt="" />
                        <p>asdasdasdassdasdsa</p>
                    </div>
                    <div className="footer-menu">
                        <span className="footer-span">Menu</span>
                        <ul>
                            <li>asdasd</li>
                            <li>asdasd</li>
                            <li>asdasd</li>
                            <li>asdasd</li>
                        </ul>
                    </div>
                    <div className="footer-info">
                        <span className="footer-span">Informacje</span>
                        <ul>
                            <li>
                                <span>Adres:</span>
                                Rzeszów 12 32
                            </li>
                            <li>
                                <span>Telefon:</span>
                                123123123123
                            </li>
                            <li>
                                <span>Mail:</span>
                                test@asdasd.pl
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            Copyright 2022 Gentuuu Kamil Pisula
        </div>
    </>
  )
}
