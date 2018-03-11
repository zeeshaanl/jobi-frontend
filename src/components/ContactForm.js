import React from 'react';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask'
import TextareaAutosize from 'react-autosize-textarea';

export default class ContactForm extends React.Component {
    render() {
        return (
            <form method='POST' className='contact-form'>
                <MaskedInput
                    mask={false}
                    className='contact-input'
                    placeholder='Name'
                    id='name'
                    name='name'
                />
                <MaskedInput
                    mask={emailMask}
                    className='contact-input'
                    placeholder='Your email'
                    id='email'
                    name='email'
                />
                <div className='form-group'>
                    <label htmlFor='message'>Message</label>
                    <TextareaAutosize
                        className='contact-textarea'
                        id='message'
                        name='message'
                        rows={8}
                        maxRows={15}
                    />
                </div>
                <div className='btn-container'>
                    <input type='submit' value='SUBMIT' className='submit-button' />
                </div>
                <div id='response hidden'>
                </div>
            </form>
        );
    }
}
