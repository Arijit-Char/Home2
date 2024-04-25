import { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
const Layout = ({ children, headerColor, isTransparent,about }) => {
    return (
        <Fragment>
            <Header headerColor={headerColor} isTransparent={isTransparent} about={about} />
            <main>{children}</main>
            <Footer />
        </Fragment>
    );
};
export default Layout;
