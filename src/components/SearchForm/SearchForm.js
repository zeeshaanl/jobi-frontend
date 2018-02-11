import React from 'react';
import MaskedInput from 'react-text-mask';
import JobPost from '../JobPost/JobPost.js';
import SimilarOffers from '../SimilarOffers/SimilarOffers.js';

class SearchForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='job-search-form'>
                    <p>MAKING FREELANCING RELIABLE FOR FREELANCERS AND BUSINESSES.</p>
                    <p>FIND YOUR WORK NOW!</p>
                    <form action="" method="GET" id="job_search_form">
                        <h1 className='main-text'>I'm an</h1>
                        <MaskedInput
                            mask={false}
                            className='search-field main-text'
                            placeholder='Art Director'
                            id='keyword'
                            name='keyword'
                        />
                        <datalist id="role-datalist"></datalist>
                        <br className='hidden-xs hidden-sm' />
                        <h1 className='main-text'>looking for a job in</h1>
                        <MaskedInput
                            mask={false}
                            className='search-field main-text'
                            placeholder='London'
                            id='location'
                            name='location'
                        />
                        <datalist id="location-datalist"></datalist>
                        <br className='hidden-xs hidden-sm' />
                        <h1 className='main-text'>as a</h1>
                        <MaskedInput
                            mask={false}
                            className='search-field main-text'
                            placeholder='Freelancer'
                            id='job_type'
                            name='job_type'
                        />
                        <datalist id="type-datalist"></datalist>
                        <br className='hidden-xs hidden-sm' />
                    </form>
                </div>
                <div className='container'>
                    <SimilarOffers />
                </div>
            </React.Fragment>
        );
    }
}

export default SearchForm;
