import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import Image from 'next/image';
import payment from '../../assets/images/payment.png'
import Logo from '../../assets/images/Logo.png'
import { Loading } from '../../components/child_components/Loading';
import { PaymentCompleted } from '../../components/child_components/PaymentCompleted';
import Head from 'next/head';

interface UserData {
  Id: string;
  name: string;
  phone: string;
  email: string;
  amount: number;
  service: string;
  merchantTransactionId: string;
}

const Home = () => {
  const PAYMENT_VARIABLE = process.env.PAYMENT_VARIABLE

  const URL = typeof window !== 'undefined' ? window.location.href : '';
  const Id = URL.split('/').pop();

  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`/api/payment/onepaymentlink?Id=${Id}`);
        setStatus(response.data.status)
        setData(response.data)
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
      finally {
        setLoading(false)
      }
    };
    fetchInitialData();
  }, [Id]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`/api/payment/paymentid-link?Id=${Id}`);
        setPhone(response.data.data.phone)
        setName(response.data.data.name)
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
      finally {
        setLoading(false)
      }
    };
    fetchInitialData();
  }, [Id]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await axios.post('/api/payment/whatsapp', { name: data?.name, number: data?.phone, phone: phone, url: URL, amount: data?.amount })
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };
    fetchInitialData();
  }, [URL, data, phone]);

  const handleSubmit = useCallback(() => {
    const formattedAmount = (data?.amount || 0) * 100;
    const generateRandomString = (length: number) => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomString = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
      }
      return randomString;
    };

    const fetchData = async () => {
      const merchantTransactionId = generateRandomString(8)
      setLoading(true);
      try {
        const formData = {
          // "merchantId": "MERCHANTUAT",    //dummy
          "merchantId": "M1Z862ZMT5T2",
          "merchantTransactionId": merchantTransactionId,
          "amount": formattedAmount,
          "merchantUserId": generateRandomString(10),
          "redirectUrl": `${PAYMENT_VARIABLE}/payment/${Id}`,
          "redirectMode": "REDIRECT",
          "callbackUrl": `${PAYMENT_VARIABLE}/api/payment-callback`,
          "mobileNumber": "9999999999",
          "paymentInstrument": {
            "type": "PAY_PAGE"
          },
        };

        const response = await axios.post('/api/payment', formData);
        if (response.data.success) {
          const res = await axios.post('/api/payment/onepaymentlink', { Id, merchantTransactionId });
          const paymentLink = response.data.data.instrumentResponse.redirectInfo.url;
          window.location.href = paymentLink
        }
      } catch (error) {
        console.error('Payment initiation error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData()
  }, [data, Id, PAYMENT_VARIABLE]);

  return (
    <div className='paymentId'>
      <Head>
        <title>Payment of INR {data?.amount} requested by RegisterKaro for ...</title>
        <meta name="description" content="Click on this link to pay to RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        loading ?
          (<Loading />) : (status === "COMPLETED" && data) ? (
            <div className='completed'>
              <div className='main'>
                <div className='upper flex'>
                  <div className='img'><Image src={Logo} alt='img' /></div>
                  <div className='heading'><h2>RegisterKaro</h2></div>
                </div>
                <div className='lower flex'>
                  <div className='lottie'>
                    <PaymentCompleted />
                  </div>
                  <div className='img'><Image src={payment} alt="img" /></div>
                  <div className='content'>
                    <div className='heading'>Payment Completed</div>
                    <div className='p'>You have successfully paid INR {data.amount}</div>
                    <div className='p'>Payment ID: {data.Id}</div>
                    <div className='p'>Our executive will reach out to your shortly to start the process.</div>
                  </div>
                </div>
              </div>
            </div>
          ) : ((status === "FAILED" || status === "PENDING") && data) ?
            (
              <div className='remaining'>
                <div className='main'>
                  <div className='upper flex'>
                    <div className='img'><Image src={Logo} alt='img' /></div>
                    <div className='heading'><h2>RegisterKaro</h2></div>
                  </div>
                  <div className='lower flex'>
                    <div className='heading'>Payment Request from RegisterKaro</div>
                    <div className='content'>
                      <div>Customer Name: <span className='p'>{data.name}</span></div>
                      <div>Phone No: <span className='p'>{data.phone}</span></div>
                      <div>Email: <span className='p'>{data.email}</span></div>
                      <div>Amount: <span className='p'>{data.amount}</span></div>
                      <div>Service raised for: <span className='p'>{data.service}</span></div>
                    </div>
                    <button onClick={handleSubmit} disabled={loading}>Proceed</button>
                  </div>
                </div>
              </div>
            ) : (status === "CANCELLED" && data) ?
              (
                <div className='remaining'>
                  <div className='main'>
                    <div className='upper flex'>
                      <div className='img'><Image src={Logo} alt='img' /></div>
                      <div className='heading'><h2>RegisterKaro</h2></div>
                    </div>
                    <div className='lower flex'>
                      <div className='heading'>This payment link is no longer active! <br /> Please reach out to the point of contact assigned to you bellow.</div>
                      <div className='content'>
                        <div>Name: <span className='p'>{name}</span></div>
                        <div>Phone No: <span className='p'>{phone}</span></div>
                      </div>
                    </div>
                  </div>
                </div>) :
              (
                <div className='oops'>
                  <div className='main'>
                    <h1>Oops, looks like</h1>
                    <h1 className='color'>this link is invalid!</h1>
                    <div className='line'></div>
                    <p className='p'>Please contact the merchant for more details</p>
                  </div>
                </div>
              )
      }
    </div>
  )
}

export default Home