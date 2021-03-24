import React from 'react'
import "./Footer.css"
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'

function Footer() {
    return (
        <div className="footer">
            <h2 className="footer__text">
                Developed By Darshil Mehta
            </h2>
            <h2 className="footer__links">
                <a 
                    target="_blank" 
                    href="https://www.facebook.com/darshil223/"
                    >
                        <FacebookIcon />
                </a>
                <a 
                    target="_blank" 
                    href="https://www.instagram.com/darshil.mehta.05/"
                    >
                        <InstagramIcon />
                </a>
                <a 
                    target="_blank" 
                    href="https://github.com/Darshil-Mehta" 
                    >
                        <GitHubIcon />
                </a>
                <a 
                    target="_blank" 
                    href="https://www.linkedin.com/in/darshil-mehta-11b761208/" 
                    
                    >
                        <LinkedInIcon />
                </a>
            </h2>
        </div>
    )
}

export default Footer
