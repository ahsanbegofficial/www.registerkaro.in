import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { CopyClipboard } from './CopyClipboard';
import { CSVLink, CSVDownload } from 'react-csv';

interface AdminDashboardProps {
    Profile: String
}

interface PaymentData {
    username: string
    name: string;
    status: boolean;
    service: string;
    email: string;
    updated_date: string;
    amount: number;
    phone: number;
    link: string;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ Profile }) => {
    const [initialData, setInitialData] = useState<PaymentData[]>([]);

    const fetchInitialData = useCallback(async () => {
        try {
            const response = await axios.get(`/api/payment/user?profile=${Profile}`);
            const sortedData = response.data.data.sort((a: any, b: any) => {
                const dateA = new Date(a.updated_date).getTime();
                const dateB = new Date(b.updated_date).getTime();
                return dateB - dateA;
            });
            setInitialData(sortedData)
        } catch (error) {
            console.error('Error fetching initial data:', error);
        }
    }, [Profile]);

    useEffect(() => {
        fetchInitialData()
    }, [fetchInitialData]);

    const handleCancel = async (e: any) => {
        try {
            const res = await axios.get(`api/payment/cancel-paymentlink?link=${e.link}&profile=${Profile}`)
            if (res.data.success) {
                alert(res.data.message)
                fetchInitialData()
            }
        }
        catch (err) {
            console.log('err', err)
        }
    }

    const handleFilterByStatus = () => {
        const filtered = initialData.filter((item: any) => item.status === 'COMPLETED');
        setInitialData(filtered);
    };

    return (
        <div>
            <div className='buttons'>
                <button><CSVLink data={initialData}>Download Data</CSVLink></button>
                <button onClick={handleFilterByStatus}>Filter By Status</button>
            </div>
            {
                initialData.length > 0 && (
                    <div>
                        <div className='table'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Service</th>
                                        <th>Email</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Phone No.</th>
                                        <th>Payment Link</th>
                                        <th>Cancelled</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {initialData?.map((e, i) => (
                                        <tr key={i}>
                                            <td>{e.username}</td>
                                            <td>{e.name}</td>
                                            <td>{e.status}</td>
                                            <td>{e.service}</td>
                                            <td>{e.email}</td>
                                            <td>{e.updated_date}</td>
                                            <td>{e.amount}</td>
                                            <td>{e.phone}</td>
                                            <td>{e.link}<CopyClipboard url={e.link} /></td>
                                            <td><button onClick={() => handleCancel(e)}>Cancel</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
