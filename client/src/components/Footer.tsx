import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { MDBBtn,  } from 'mdb-react-ui-kit';

import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import payment from '../image/payment.png'
import { FaChevronUp } from 'react-icons/fa';


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div >



      <br />
      <button
  className="flex items-center justify-center mx-auto bg-gray-500 hover:bg-gray-600 rounded-full p-2 transition-colors duration-200 focus:outline-none"
  onClick={() => {
    scrollToTop();
  }}
>
  <FaChevronUp className="text-white" />
</button>
 &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <MDBFooter style={{ backgroundColor: '#000000' }} className='text-center text-lg-start '>
        <section className=' p-4 border-bottom'>


          <div className="flex flex-row gap-5 justify-content-center ">
            <YouTubeIcon style={{ backgroundColor: '#ed302f' }} />
            <FacebookIcon style={{ backgroundColor: '#3b5998' }} />
            <TwitterIcon style={{ backgroundColor: '#55acee' }} />
            <InstagramIcon  style={{ backgroundColor: '#ac2bac' }} />
          </div>
        </section>

        <section className='' >
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3' style={{ color: 'white' }}>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  Company name
                </h6>
                <p>
                  ECOMMERCE-STORE-RBK

                </p>
                <br />
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  Payment
                </h6>
                <img src={payment} className='w-80' alt="" />
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Beauty
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Toys
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Books
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Sports
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Settings
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Orders
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                <LocationOnRoundedIcon color="success" />
                  PARIS, ANTONY 92160, FR
                </p>
                <p>
                  <AlternateEmailRoundedIcon color="success" />
                  info@example.com
                </p>
                <p>
                  <PhoneIphoneRoundedIcon color="success" /> + 06 22 48 10 90
                </p>
               
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='color-white text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2023 Copyright:
          <a className='text-reset fw-bold' href=''>
            RBK ECOMMERCE STORE        </a>
        </div>
      </MDBFooter>
    </div>
  );
}
