import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import Offer from './Offer.js';

const scrollStyles = {
    height: '200px'
}

export default class SimilarOffers extends React.Component {
    render() {
        return (
            <div className='similar-offers'>
                <div className='row'>
                    <h2>Similar offers</h2>


                    <div className='scroll'>
                        <Offer
                            time='posted at 4:32 pm'
                            title='Creative Director Digital'
                            company='IBM'
                            location='Berlin / Deutchland'
                            url='http://kissanime.ru/'
                        />
                        <Offer
                            time='posted at 4:32 pm'
                            title='Creative Director Digital'
                            company='IBM'
                            location='Berlin / Deutchland'
                            url='http://kissanime.ru/'
                        />
                        <Offer
                            time='posted at 4:32 pm'
                            title='Creative Director Digital'
                            company='IBM'
                            location='Berlin / Deutchland'
                            url='http://kissanime.ru/'
                        />
                        <Offer
                            time='posted at 4:32 pm'
                            title='Creative Director Digital'
                            company='IBM'
                            location='Berlin / Deutchland'
                            url='http://kissanime.ru/'
                        />
                    </div>
                </div>
            </div>
        );
    }
}
