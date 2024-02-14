import axios from 'axios';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AdminDashboard } from '../components/payment/AdminDashboard';
import { LeaderBoard } from '../components/payment/LeaderBoard';
import {Loading} from '../components/child_components/Loading'

const Admin = () => {
  const URL = typeof window !== 'undefined' ? window.location.href : '';
  const { data: session } = useSession();
  const userName = session?.user.name
  const userMail = session?.user.email?.split("@")[0];

  const [loading, setLoading] = useState(false);
  const [domainUser, setDomainUser] = useState(false);
  const [userId, setUserId] = useState('');
  const [authenticated, setAuthenticated] = useState('');
  const [profile, setProfile] = useState('');

  useEffect(() => {
    const storeUser = async () => {
      setLoading(true)
      try {
        const response = await axios.post('/api/payment/user', { username: userMail });
        setProfile(response.data.profile)
        setAuthenticated(response.data.authenticated)
      } catch (error) {
        console.error('Error storing user:', error);
      } finally {
        setLoading(false)
      }
    };
    if (userMail) {
      storeUser();
    }
  }, [userMail, loading]);

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

  if (loading && (authenticated == 'false' || authenticated == '')) return <Loading />

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
        <div className='account'>
          <p>Signed in as <span>{userName}</span></p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
      {
        profile === 'Super Admin' ? (<div>
          <LeaderBoard userMail={'chahat'} />
          <LeaderBoard userMail={'himanshi'} />
        </div>) : (profile === 'Sales Admin' || profile === 'Operations Admin') ? (<LeaderBoard userMail={userMail} />) : <h1>You are not authorised</h1>
      }
      <AdminDashboard Profile={profile} />
    </div>
  );
};

export default Admin;