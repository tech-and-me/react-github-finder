import LOGO from '../assets/logoWhitePhary.png';

const Footer = () => {
    const footerYear = new Date().getFullYear()

  return (
    <div>
        <footer className='footer p-5 bg-gray-700 text-primary-content footer-center'>
            <div>
                <img src={LOGO} alt="" style={{width:'20%', minWidth:"50px"}} />
                <p>Copyright &copy; {footerYear} All rights reserved</p>
            </div>         
        </footer>
    </div>
  )
}

export default Footer