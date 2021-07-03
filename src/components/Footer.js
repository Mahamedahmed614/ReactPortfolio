import React from 'react';

const divStyle = {

    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60px',
    lineHeight: '60px',
    backgroundColor: '#212529'
}

const Footer = () => {
    return (

        <footer class="footer" style={divStyle}>
            <div class="container">
                <a href="https://www.linkedin.com/in/mahamed-ahmed-608387215/" target='_blank '>LinkedIn</a>
                <a href="https://github.com/Mahamedahmed614" target='_blank ' style={{ marginLeft: '2rem' }}>Github</a>
                <a href="mailto:mahamedahmed614@gmail.com" style={{ marginLeft: '2rem' }}>Email</a>
            </div>
        </footer>

    )
}

export default Footer