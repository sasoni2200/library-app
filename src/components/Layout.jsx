import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div>
         <div className="top-bar">
        <h1 className='developername'> Designed and Developed by<a href="https://www.linkedin.com/in/sagarsoni" target="_blank">Sagar Soni</a>  </h1>
|
        <a href="https://www.linkedin.com/in/sagarsoni" target="_blank">
            <i className="fab fa-linkedin icon"></i> Linkedin
        </a> |
        <a href="https://wa.me/919131685929" target="_blank">
            <i className="fab fa-whatsapp icon"></i> WhatsApp
        </a> |
        <a href="https://drive.google.com/file/d/141Z8UI3LUiTz5eZPV2gAgoVOZtGB7XXL/view" target="_blank">
            <i className="fas fa-file-alt icon"></i> Resume
        </a>
    </div>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
