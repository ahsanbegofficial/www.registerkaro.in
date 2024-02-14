import axios from 'axios';
import React, { useCallback, useState } from 'react'

interface FormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    data: {
        name: string;
        email: string;
        phone: number;
        service: string;
        amount: number;
        conversionValue: string;
    };
}


export const Form: React.FC<FormProps> = ({ handleSubmit, handleChange, data }) => {
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type='text' name='name' placeholder='Enter name here...' value={data?.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' name='email' placeholder='Enter email here...' value={data?.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone No:</label>
                    <input type='number' name='phone' placeholder='Enter number here...' value={data?.phone} minLength={10} maxLength={10} onChange={handleChange} required />
                </div>
                <div>
                    <label>Service:</label>
                    <input type='text' name='service' placeholder='Enter service here...' value={data?.service} onChange={handleChange} required />
                </div>
                <div>
                    <label>Amount:</label>
                    <input type='number' name='amount' placeholder='Enter amount here...' value={data?.amount} onChange={handleChange} required />
                </div>
                <div>
                    <label>Conversion value:</label>
                    <input type='number' name='conversionValue' placeholder='Enter conversion value here...' value={data?.conversionValue} onChange={handleChange} required />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
