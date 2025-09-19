import React from 'react';

import Header1 from '../../components/header/Header-1';
import Header2 from '../../components/header/Header-2';
import Header3 from '../../components/header/Header-3';
import NewsLetter from '../../components/new_letter/NewsLetter';
import Footer from '../../components/footer/Footer';
import MainCheckout from '../../components/checkout/MainCheckout';

const Page = () => {
    return (
        <div>
            <Header1/>
            <Header2/>
            <Header3/>
            
      <div className="title-account">
        <small>Home / Checkout</small>
        <h4>Checkout</h4>
      </div>
            <main>
                <MainCheckout /> {/* استخدام المكون هنا */}
            </main>

            <NewsLetter/>
            <Footer/>
        </div>
    );
}

export default Page;