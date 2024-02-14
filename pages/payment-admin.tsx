import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [data, setData] = useState<any[]>([]);
    const [phone, setPhone] = useState('')
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const fetchInitialData = async () => {
        try {
            const response = await axios.get('/api/payment/payment-admin');
            setData(response.data)
        } catch (error) {
            console.error('Error fetching initial data:', error);
        }
    };

    useEffect(() => {
        fetchInitialData();
    }, [])

    const handleSubmit = async (e: any, selectedDepartment: string) => {
        if (phone === '') {
            alert('Please fill the details')
        } else {
            try {
                const response = await axios.post('/api/payment/payment-admin', { id: e.userId, dep: selectedDepartment, ph: phone });
                if (response.data.success) {
                    alert('Approved successfully')
                    fetchInitialData();
                }
            } catch (error) {
                console.error('Error fetching initial data:', error);
            }
        }
        window.location.reload()
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>, rowIndex: number) => {
        const selectedDepartment = e.target.value;
        setSelectedDepartment(selectedDepartment);
    };

    const handlePhone = (e: any) => {
        setPhone(e.target.value)
    };

    return (
        <div className='payment-admin'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Phone</th>
                        <th>Authentication Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((e: any, i: number) => (
                            <tr key={i} className='flex'>
                                <td>{e.name}</td>
                                <td>
                                    <select onChange={(event) => handleChange(event, i)}>
                                        <option>-----Select----</option>
                                        <option value="operations - incorporation">operations - incorporation</option>
                                        <option value="operations - compliance">operations - compliance</option>
                                        <option value="operations - post incorporation">operations - post incorporation</option>
                                        <option value="sales - incorporation">sales - incorporation</option>
                                        <option value="sales - compliance">sales - compliance</option>
                                    </select>
                                </td>
                                <td><input type='text' placeholder='Enter Phone here...' onChange={handlePhone} /></td>
                                <td><button onClick={() => handleSubmit(e, selectedDepartment)}>Approve</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Home