import React from 'react'

export const TableCom = () => {
    return (
        <div id='HowTo'>
            <p className='main-para'>All LLPs incorporated in India are required to file statutory returns with MCA every year. Limited Liability Partnerships having a sales turnover of over Rs. 40 lakhs or capital of over Rs. 25 lakhs will also be required to complete a statutory audit. RegisterKaro can help you maintain your LLP Compliance at a very affordable price.</p>
            <table>
                <tr>
                    <th className='first'>Forms</th>
                    <th>Compliance</th>
                    <th>Due Date</th>
                    <th className='last'>Penalty</th>
                </tr>
                <tr>
                    <td>DIR-3 KYC</td>
                    <td>For every individual with DIN</td>
                    <td>Before 30th Sep every year</td>
                    <td>Rs. 5000 if the DIN is deactivated</td>
                </tr>
                <tr>
                    <td>Form-11</td>
                    <td>Annual Returns</td>
                    <td>30th May</td>
                    <td>Rs. 100/day</td>
                </tr>
                <tr>
                    <td>Form-8</td>
                    <td>Statements of Accounts & Solvency</td>
                    <td>30th October</td>
                    <td>Rs. 100/day</td>
                </tr>
            </table>
        </div>
    )
}