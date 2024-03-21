import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { BenefitsOfState } from '../components/static/state-fssai-license-registration/BenefitsOfState'
import { DocumentsRequired } from '../components/static/state-fssai-license-registration/DocumentsRequired'
import { EventBased } from '../components/static/state-fssai-license-registration/EventBased'
import { Hero } from '../components/static/state-fssai-license-registration/Hero'
import { PenaltiesUnder } from '../components/static/state-fssai-license-registration/PenaltiesUnder'
import { Process } from '../components/static/state-fssai-license-registration/Process'
import { StateFSSAILicense } from '../components/static/state-fssai-license-registration/StateFSSAILicense'
import { WhoState } from '../components/static/state-fssai-license-registration/WhoState'


const Home = () => {
    return (
        <div className='services-pages state-fssai-license-registration-reg'>
            <Head>
                <title>FSSAI State License | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/state-fssai-license-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="IEC Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Get Online State FSSAI License Registration in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Role of Food Safety Standard Authority of India</h2>
            <div className='heading-line'></div>
            <EventBased />
            <h2 className='main-heading'>Benefits of State FSSAI License Registration</h2>
            <div className='heading-line'></div>
            <BenefitsOfState />
            <h2 className='main-heading'>Who needs a State FSSAI License?</h2>
            <div className='heading-line'></div>
            <WhoState />
            <h2 className='main-heading'>Documents required for State FSSAI License Registration</h2>
            <div className='heading-line'></div>
            <DocumentsRequired />
            <h2 className='main-heading'>Process for State FSSAI License Registration</h2>
            <div className='heading-line'></div>
            <StateFSSAILicense />
            <h2 className='main-heading'>Penalties Under the FSSAI Act </h2>
            <div className='heading-line'></div>
            <PenaltiesUnder />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
        </div>
    )
}
export default Home