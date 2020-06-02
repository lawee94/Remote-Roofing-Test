import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { withRouter } from 'react-router-dom'

const hoc = (props) => (
    <div className="Content bg-white">
        <Header />
            <main>
                {props.children}
            </main>
        <Footer />
    </div>
)

export default withRouter(hoc);