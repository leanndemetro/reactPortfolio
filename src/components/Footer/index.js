import React, { Component } from "react";
import "./style.css"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <a  className="footerlinks" rel="noreferrer" target="_blank" href="https://github.com/leanndemetro"><AiFillGithub /></a> <a rel="noreferrer" target="_blank" className="footerlinks" href="https://www.linkedin.com/in/alyssa-de-metro-59abba1b0/"><AiFillLinkedin /></a>
          </footer>
        );
    }
}

export default Footer;