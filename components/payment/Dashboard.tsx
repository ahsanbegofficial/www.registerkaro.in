import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CopyClipboard } from './CopyClipboard';

interface DashboardProps {
  initialData: Array<{
    name: string;
    status: boolean;
    service: string;
    email: string;
    updated_date: string;
    amount: number;
    phone: number;
    link: string;
  }>;
  handleCancel: (data: any) => void; 
}

export const Dashboard: React.FC<DashboardProps> = ({ initialData, handleCancel }) => {
  return (
    <div>
      {
        initialData?.length > 0 && (
          <div>
            <div className='table'>
              <table>
                <thead>
                  <tr>
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
                  {initialData?.map((e: any, i: number) => (
                    <tr key={i}>
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
