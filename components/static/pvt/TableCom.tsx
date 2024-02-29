import React from 'react'

interface HeroProps {
    cityName: string;
}

export const TableCom = ({ cityName }: HeroProps) => {
    return (
        <div>
            <table>
                <tr>
                    <th className='first'>Particulars</th>
                    <th>Private Limited</th>
                    <th>OPC</th>
                    <th>Partnership Firm</th>
                    <th>LLP</th>
                    <th className='last'>Proprietorship Firm</th>
                </tr>
                <tr>
                    <td>Registration</td>
                    <td>Mandatory</td>
                    <td>Mandatory</td>
                    <td>Optional</td>
                    <td>Mandatory</td>
                    <td>Optional</td>
                </tr>
                <tr>
                    <td>Applicable Law</td>
                    <td>Companies Act, 2013</td>
                    <td>Companies Act, 2013</td>
                    <td>Indian Partnership Act, 1932</td>
                    <td>LLP Act, 2008</td>
                    <td>No specified Act</td>
                </tr>
                <tr>
                    <td>Ownership Transfer</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Liability Protection</td>
                    <td>Limited</td>
                    <td>Limited</td>
                    <td>Unlimited</td>
                    <td>Limited</td>
                    <td>Limited</td>
                </tr>
                <tr>
                    <td>Separate Legal Entity</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Compliance Requirement</td>
                    <td>High</td>
                    <td>High</td>
                    <td>Low</td>
                    <td>Moderate</td>
                    <td>Low</td>
                </tr>
                <tr>
                    <td>Perpetual Existence</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>No</td>
                </tr>
            </table>
        </div>
    )
}