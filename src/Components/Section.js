import Header from './Layouts/Header';
import SideBar from './Layouts/SideBar'
import LeftSideBar from './Layouts/LeftSideBar'
import Main from './Layouts/Main'
import Footer from './Layouts/Footer'


export default function Section () {
    return (
        <div>
            <Header />
            <SideBar />
            <Main />
            <LeftSideBar />
            <Footer />
        </div>
    );
}