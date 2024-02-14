import axios from 'axios';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

interface FormData {
    ProposedNameOfTheBusiness: string;
    NoOfPartners: string;
    state: string;
    name: string;
    email: string;
    number: string;
}

const Home = () => {
    const router = useRouter();
    const [active, setActive] = useState(1)
    const [animation, setAnimation] = useState('slide-in');
    const [formData, setFormData] = useState<FormData>({
        ProposedNameOfTheBusiness: '',
        NoOfPartners: '',
        state: '',
        name: '',
        email: '',
        number: '',
    });

    const handleChange = (e: any) => {
        console.log(e.target.name);
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value.length <= 10) {
            setFormData((prevData) => ({
                ...prevData,
                number: value,
            }));
        }
    };

    const handleSubmit = useCallback(async (formData: any) => {
        try {
            const response = await axios.post('/api/typeform', formData);
            if (response.data.success) {
                router.push("/thank-you");
            }
        } catch (error) {
            console.error('Error fetching initial data:', error);
        }
    }, [router]);


    const handleIncrease = () => {
        if (active === 1) {
            setAnimation('slide-out');
            setTimeout(() => {
                setActive((prev) => prev + 1);
                setAnimation('slide-in');
            }, 200);
        }
        if (active === 2 && formData.ProposedNameOfTheBusiness !== '') {
            setAnimation('slide-out');
            setTimeout(() => {
                setActive((prev) => prev + 1);
                setAnimation('slide-in');
            }, 200);
        }
        if (active === 3 && formData.NoOfPartners !== '') {
            setAnimation('slide-out');
            setTimeout(() => {
                setActive((prev) => prev + 1);
                setAnimation('slide-in');
            }, 200);
        }
        if (active === 4 && formData.state !== '') {
            setAnimation('slide-out');
            setTimeout(() => {
                setActive((prev) => prev + 1);
                setAnimation('slide-in');
            }, 200);
        }
        if (active === 5 && formData.name !== '') {
            setAnimation('slide-out');
            setTimeout(() => {
                setActive((prev) => prev + 1);
                setAnimation('slide-in');
            }, 200);
        }
        if (active === 6 && formData.email !== '') {
            if (formData.email.includes('@') && (formData.email.includes('.com') || formData.email.includes('.in'))) {
                setAnimation('slide-out');
                setTimeout(() => {
                    setActive((prev) => prev + 1);
                    setAnimation('slide-in');
                }, 200);
            }
        }
        if (active === 7 && formData.number.length == 10) {
            handleSubmit(formData)
        }
    }

    const handleDecrease = () => {
        setAnimation('slide-out-reverse');
        setTimeout(() => {
            setActive((prev) => prev - 1);
            setAnimation('slide-in-reverse');
        }, 200);
    }

    return (
        <div className="typeform">
            <div className="backgroundDiv">
                <div className='mainDiv'>
                    <div className={`inputDiv ${active === 1 ? 'active' : 'hide'} ${animation === 'slide-out' ? 'slide-out' : animation === 'slide-in' ? 'slide-in' : animation === 'slide-in-reverse' ? 'slide-in-reverse' : ''}`}>
                        <div className='content'>
                            <h3 className='text-yellow'>Ready to supercharge your Startup journey in India? Let's make it happen together!</h3>
                            <p>Join forces with India's largest incorporation service provider and tap into a vibrant startup ecosystem brimming with successful entrepreneurs.</p>
                            <p>Take the first step towards your entrepreneurial dreams by answering a few quick questions. We'll have your business registered in less than 7 days. Click below to get started!</p>
                            <button className="btn" onClick={handleIncrease}>Continue</button>
                        </div>
                    </div>
                    <div className={`inputDiv ${active === 2 ? 'active' : 'hide'} ${animation === 'slide-out' ? 'slide-out' : animation === 'slide-in' ? 'slide-in' : animation === 'slide-in-reverse' ? 'slide-in-reverse' : ''}`}>
                        <p className='label'>1. Proposed name of the business. *</p>
                        <div className="group">
                            <input type="text" className="input" name="ProposedNameOfTheBusiness" value={formData.ProposedNameOfTheBusiness} onChange={handleChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Enter your business name here</label>
                        </div>
                        {active === 2 && (formData.ProposedNameOfTheBusiness.trim() === '') && (
                            <p style={{ color: 'red' }}>Please fill out the field.</p>
                        )}
                        <div className='flex-btn-div'>
                            <button className="btn" onClick={handleDecrease}>Previous</button>
                            <button className="btn" onClick={handleIncrease}>Next</button>
                        </div>
                    </div>
                    <div className={`inputDiv ${active === 3 ? 'active' : 'hide'} ${animation === 'slide-out' ? 'slide-out' : animation === 'slide-in' ? 'slide-in' : animation === 'slide-in-reverse' ? 'slide-in-reverse' : ''}`}>
                        <p className='label'>2. No. of Partners. *</p>
                        <div className="group">
                            <input type="tel" className="input" name="NoOfPartners" value={formData.NoOfPartners} onChange={handleChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Enter your no. of partners here</label>
                        </div>
                        {active === 3 && (formData.NoOfPartners.trim() === '') && (
                            <p style={{ color: 'red' }}>Please fill out the field.</p>
                        )}
                        <div className='flex-btn-div'>
                            <button className="btn" onClick={handleDecrease}>Previous</button>
                            <button className="btn" onClick={handleIncrease}>Next</button>
                        </div>
                    </div>
                    <div className={`inputDiv ${active === 4 ? 'active' : 'hide'} ${animation === 'slide-out' ? 'slide-out' : animation === 'slide-in' ? 'slide-in' : animation === 'slide-in-reverse' ? 'slide-in-reverse' : ''}`}>
                        <p className='label'>3. State of Incorporation. *</p>
                        <div >
                            <span className="highlight"></span>
                            <span className="bar"></span>
                        </div>
                        <select name="state" className="group" onChange={handleChange}>
                            <option value="">--State--</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>s
                        </select>
                        {active === 4 && (formData.state.trim() === '') && (
                            <p style={{ color: 'red' }}>Please fill the field.</p>
                        )}
                        <div className='flex-btn-div'>
                            <button className="btn" onClick={handleDecrease}>Previous</button>
                            <button className="btn" onClick={handleIncrease}>Next</button>
                        </div>
                    </div>

                    <div className={`inputDiv ${active === 5 ? 'active' : 'hide'} ${animation === 'slide-out' ? 'slide-out' : animation === 'slide-in' ? 'slide-in' : animation === 'slide-in-reverse' ? 'slide-in-reverse' : ''}`}>
                        <p className='label'>4. Name of the Applicant. *</p>
                        <div className="group">
                            <input type="text" className="input" name="name" value={formData.name} onChange={handleChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Enter your name here</label>
                        </div>
                        {active === 5 && (formData.name.trim() === '') && (
                            <p style={{ color: 'red' }}>Please fill out the field.</p>
                        )}
                        <div className='flex-btn-div'>
                            <button className="btn" onClick={handleDecrease}>Previous</button>
                            <button className="btn" onClick={handleIncrease}>Next</button>
                        </div>
                    </div>
                    <div className={`inputDiv ${active === 6 ? 'active' : 'hide'} ${animation === 'slide-out' ? 'slide-out' : animation === 'slide-in' ? 'slide-in' : animation === 'slide-in-reverse' ? 'slide-in-reverse' : ''}`}>
                        <p className='label'>5. Email of the Applicant. *</p>
                        <div className="group">
                            <input type="email" className="input" name="email" value={formData.email} onChange={handleChange} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>name@example.com</label>
                        </div>
                        {active === 6 && (formData.email.trim() === '') && (
                            <p style={{ color: 'red' }}>Please fill the field.</p>
                        )}
                        <div className='flex-btn-div'>
                            <button className="btn" onClick={handleDecrease}>Previous</button>
                            <button className="btn" onClick={handleIncrease}>Next</button>
                        </div>
                    </div>
                    <div className={`inputDiv ${active === 7 ? 'active' : 'hide'} ${animation === 'slide-out' ? 'slide-out' : animation === 'slide-in' ? 'slide-in' : animation === 'slide-in-reverse' ? 'slide-in-reverse' : ''}`}>
                        <p className='label'>6. Phone no. of the Applicant. *</p>
                        <div className="group">
                            <input type="tel" className="input" name="number" value={formData.number} onChange={handleNumberInputChange} maxLength={10} required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Enter your number here</label>
                        </div>
                        {active === 7 && (formData.number.length !== 10) && (
                            <p style={{ color: 'red' }}>Please fill the field.</p>
                        )}
                        <div className='flex-btn-div'>
                            <button className="btn" onClick={handleDecrease}>Previous</button>
                            <button className="btn" onClick={handleIncrease}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
