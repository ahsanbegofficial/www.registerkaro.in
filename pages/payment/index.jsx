import axios from 'axios';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { Form } from '../../components/payment/Form'
import { Dashboard } from '../../components/payment/Dashboard'
import { LeaderBoard } from '../../components/payment/LeaderBoard'

const Payment = () => {
  // const URL = typeof window !== 'undefined' ? window.location.href : '';
  const URL = 'https://www.registerkaro.in/payment'

  const { data: session } = useSession();
  const userName = session?.user.name
  const userMail = session?.user.email?.split("@")[0];

  const [loading, setLoading] = useState(false);
  const [domainUser, setDomainUser] = useState(false);
  const [userId, setUserId] = useState('');
  const [authenticated, setAuthenticated] = useState('');
  const [initialData, setInitialData] = useState([])
  const [data, setData] = useState({
    name: '',
    status: 'PENDING',
    service: '',
    email: '',
    amount: '',
    phone: '',
    conversionValue: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchInitialData = useCallback(async () => {
    try {
      const response = await axios.get(`/api/payment/paymentlinks?paymentCreatorID=${userId}`);
      const sortedData = response.data.sort((a, b) => {
        const dateA = new Date(a.updated_date);
        const dateB = new Date(b.updated_date);
        return dateB - dateA;
      });
      setInitialData(sortedData)
    } catch (error) {
      console.error('Error fetching initial data:', error);
    }
  }, [userId, setInitialData]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true)
    const generateRandomString = (length) => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomString = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
      }
      return randomString;
    };
    const randomGenerate = generateRandomString(10)

    try {
      const paymentLink = URL + '/' + randomGenerate
      const result = await axios.post('/api/payment/paymentlinks', { ...data, link: paymentLink, paymentId: randomGenerate, paymentCreatorID: userId });
      if (result.data && result.data.success) {
        alert('data added successfully');
        fetchInitialData();
      } else {
        alert('fill again');
      }
    } catch (paymentError) {
      console.error('not storing data:', paymentError);
      alert('not storing data');
    }
    finally {
      setLoading(false);
    }
  }, [data, URL, userId, setLoading, fetchInitialData]);

  const handleCancel = async (e) => {
    try {
      const res = await axios.get(`api/payment/cancel-paymentlink?link=${e.link}&profile=Sales Admin`)
      if (res.data.success) {
        alert(res.data.message)
        fetchInitialData()
      }
    }
    catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    const storeUser = async () => {
      try {
        const response = await axios.post('/api/payment/user', { username: userMail, name: userName });
        setUserId(response.data.userId)
        setAuthenticated(response.data.authenticated)
      } catch (error) {
        console.error('Error storing user:', error);
      }
    };
    if (userMail) {
      storeUser();
    }
  }, [userMail, userName]);

  useEffect(() => {
    if (session?.user?.email.includes('registerkaro.in')) {
      setDomainUser(true)
    }
  }, [session])

  if (!session || !domainUser) {
    return (
      <div className='payment'>
        <Head>
          <title>Payment | RegisterKaro</title>
          <meta name="description" content="The Official RegisterKaro" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='upper flex'>
          <div></div>
          <div className='account'>
            <p>Not signed in </p>
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        </div>
      </div>
    );
  }

  if (authenticated == 'false' || authenticated == '') {
    return (
      <>
        <h1>Go to Admin for Approval</h1>
      </>
    )
  }

  return (
    <div className='payment'>
      <Head>
        <title>Payment | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='upper flex'>
        <Form handleSubmit={handleSubmit} handleChange={handleChange} data={data} />
        <LeaderBoard userMail={userMail} />
        <div className='account'>
          <p>Signed in as <span>{userName}</span></p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
      <Dashboard initialData={initialData} handleCancel={handleCancel} />
    </div>
  );
};

export default Payment;