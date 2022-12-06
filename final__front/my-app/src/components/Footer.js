import React from "react";
import logo from './logo.svg';
import github from './github.svg';
import mail from './mail.svg';


export default function Footer() {


    return (
        // футер сайта
        <footer className="footer">
            <div className="row align-items-center">
                <div className="col">
                <a className="navbar-brand" href="#">
                    <img className="navbar-logo" src={logo} />
                    Dev_mechanic
                    </a>
                </div>
                <div className="col" id="col-links">
                    <a href="https://github.com/pimenov63" className="footer_link">
                        <img className="footer_pic" src={github} />
                        github.com/pimenov63
                    </a>
                    <a href="mailto:kostalexo@yandex.ru" className="footer_link">
                        <img className="footer_pic" src={mail} />
                        kostalexo@yandex.ru
                    </a>
                </div>
            </div>
        </footer>

    );
}