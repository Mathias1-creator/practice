import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import MobileCallButton from './MobileCallButton';
export default function Layout() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <MobileCallButton />
    </>
  );
}