import React, {useState, useEffect} from 'react';

const Form = (props) => {

    const { values, update, submit} = props

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value
        update(name, value)
    }

    const onSubmit = evt => {
     evt.preventDefault();
     submit()
    }

    return (
        <form  onSubmit={onSubmit}>
            <label>Name: 
                <input
                    type='text'
                    name='name'
                    placeholder='Enter your name'
                    value={values.name}
                    maxLength='15'
                    onChange={onChange}
                />
            </label>
            <label>Role: 
                <input
                    type='text'
                    name='role'
                    placeholder='Enter your role'
                    value={values.role}
                    maxLength='30'
                    onChange={onChange}
                />
            </label>
            <label>Email: 
                <input
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={onChange}
                />
            </label>

            <div className='submit'>
                <button>submit</button>
            </div>
        </form>
    )
}


export default Form;