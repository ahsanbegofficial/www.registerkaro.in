import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Loading } from '../child_components/Loading';

interface LeaderBoardProps {
  userMail: String;
}
export const LeaderBoard: React.FC<LeaderBoardProps> = ({ userMail }) => {
  const [data, setData] = useState([])
  const [total, setTotal] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`api/payment/leaderboard?userName=${userMail}`)
        setData(response.data.data.arr)
        setTotal(response.data.data.arr2)
      }
      catch (error) {
        console.error('Error fetching userData:', error);
      } finally {
        setLoading(false)
      }
    }
    fetchUserData()
  }, [userMail]);

  const operationsIncorporationTotal = data
    .filter((e: any) => e.dep === 'operations - incorporation')
    .reduce((acc: number, curr: any) => acc + curr.amount, 0);

  const operationsComplianceTotal = data
    .filter((e: any) => e.dep === 'operations - compliance')
    .reduce((acc: number, curr: any) => acc + curr.amount, 0);

  const operationsPostIncorporationTotal = data
    .filter((e: any) => e.dep === 'operations - post incorporation')
    .reduce((acc: number, curr: any) => acc + curr.amount, 0);

  const salesIncorporationTotal = data
    .filter((e: any) => e.dep === 'sales - incorporation')
    .reduce((acc: number, curr: any) => acc + curr.amount, 0);

  const salesComplianceTotal = data
    .filter((e: any) => e.dep === 'sales - compliance')
    .reduce((acc: number, curr: any) => acc + curr.amount, 0);

  if (loading) return <div className="loading-parent"><div className="loading-circle"></div></div>

  return (
    <div className='mainLeaderBoard'>
      {
        data.length > 0 && (data as any[])[0]?.dep.includes('operations') ?
          (
            <div className='parentSales'>
              <div className='leaderBoard'>
                <h2>Operations Incorporation - LeaderBoard</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Total Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.filter((e: any) => e.dep === 'operations - incorporation').map((e: any, i: number) => (
                        <tr key={i} className='flex'>
                          <td>{i + 1}</td>
                          <td>{e.name}</td>
                          <td>{e.dep}</td>
                          <td>{e.amount}</td>
                        </tr>
                      ))
                    }
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Total</td>
                      <td>{operationsIncorporationTotal.toLocaleString('en-IN')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='parent-leaderBoard'>
                <div className='child-leaderBoard'>
                  <h2>Operations Compliance - LeaderBoard</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Total Sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.filter((e: any) => e.dep === 'operations - compliance').map((e: any, i: number) => (
                          <tr key={i} className='flex'>
                            <td>{i + 1}</td>
                            <td>{e.name}</td>
                            <td>{e.dep}</td>
                            <td>{e.amount}</td>
                          </tr>
                        ))
                      }
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>{operationsComplianceTotal.toLocaleString('en-IN')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='child-leaderBoard'>
                  <h2>Operations Post Incorporation - LeaderBoard</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Total Sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.filter((e: any) => e.dep === 'operations - post incorporation').map((e: any, i: number) => (
                          <tr key={i} className='flex'>
                            <td>{i + 1}</td>
                            <td>{e.name}</td>
                            <td>{e.dep}</td>
                            <td>{e.amount}</td>
                          </tr>
                        ))
                      }
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>{operationsPostIncorporationTotal.toLocaleString('en-IN')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
          : (data.length > 0 && (data as any[])[0]?.dep.includes('sales')) ? (
            <div className='parentSales'>
              <div className='leaderBoard'>
                <h2>Sales Incorporation - LeaderBoard</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Total Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.filter((e: any) => e.dep === 'sales - incorporation').map((e: any, i: number) => (
                        <tr key={i} className='flex'>
                          <td>{i + 1}</td>
                          <td>{e.name}</td>
                          <td>{e.dep}</td>
                          <td>{e.amount}</td>
                        </tr>
                      ))
                    }
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Total</td>
                      <td>{salesIncorporationTotal.toLocaleString('en-IN')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='leaderBoard'>
                <h2>Sales Compliance - LeaderBoard</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Total Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.filter((e: any) => e.dep === 'sales - compliance').map((e: any, i: number) => (
                        <tr key={i} className='flex'>
                          <td>{i + 1}</td>
                          <td>{e.name}</td>
                          <td>{e.dep}</td>
                          <td>{e.amount}</td>
                        </tr>
                      ))
                    }
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Total</td>
                      <td>{salesComplianceTotal.toLocaleString('en-IN')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (<div>...</div>)
      }
    </div >
  )
}
