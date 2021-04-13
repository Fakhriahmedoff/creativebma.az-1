import Navbar from './Navbar'
import Footer from './Footer'
const  Layout = ({children}) => {
    return (
        <div id='root'>
            <div>
                <Navbar/>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout
