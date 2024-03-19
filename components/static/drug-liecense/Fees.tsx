import React from 'react'

interface HeroProps {
    cityName: string;
}
export const Fees = ({ cityName }: HeroProps) => {
    return (
        <div id='Fees'>
            <div>
                <p className='main-para'>The drug license fees may differ from state to state. For offline mode, you must deposit drug license fees in the government treasury. At the same time, you can also pay it online through various methods available in your state. The table below provides standard drug license fees for the issue of the drug license-</p>
            </div>
            <table>
                <tr>
                    <th className='first'>Type of Drug License</th>
                    <th className='last'>Fees (In Rupees)</th>
                </tr>
                <tr>
                    <td>Wholesale License Fees</td>
                    <td>3000</td>
                
                </tr>
                <tr>
                    <td>Retail License Fees</td>
                    <td>3000</td>
                    
                </tr>
                <tr>
                    <td>Restricted License Fees</td>
                    <td>1000</td>
                    
                </tr>
                <tr>
                    <td>Schedule-X Drugs (Wholesale Fee)</td>
                    <td>500</td>
                    
                </tr>
                <tr>
                    <td>Schedule-X Drugs (Retail Fee)</td>
                    <td>500</td>
                    
                </tr>
            </table>
        </div>
    )
}