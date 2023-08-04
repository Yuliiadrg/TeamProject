import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SectionServices from '../../pages/Home/section-services/SectionServices';

function Layout() {
   return (
      <>
         <Header />
         <main>
            <Outlet />
            <SectionServices/>
         </main>
         <Footer/>
      </>
   )
}

export default Layout;