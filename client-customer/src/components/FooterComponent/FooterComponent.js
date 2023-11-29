
import React, { Component } from 'react';
import ContactInfo from '../ContactInfoComponent/ContactInfoComponent';
import Gmap from '../GmapComponent';
class Footer extends Component {
  
  render() {
    return (
        // <footer style={{ backgroundColor: '#000000', display: 'flex', justifyContent: 'space-between', 
        // alignItems: 'center', color: '#FFFFFF' }}>

        //     <ContactInfo/>
        //     <Gmap/>
        // </footer>
        <div className='footer'>
            <div className='footer-1'>
            <ContactInfo/>
            </div>
            <div className='footer-2'>
            <iframe title="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.7366825503177!2d-77.02599006381597!3d38.90062209407932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b793da059bdf%3A0xd28041ff95c9e868!2sCityCenterDC!5e1!3m2!1svi!2s!4v1701004585385!5m2!1svi!2s" 
                width="90%" height="100%" style={{ border: 0,}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
            </div>
        </div>
    )}
}
export default Footer;