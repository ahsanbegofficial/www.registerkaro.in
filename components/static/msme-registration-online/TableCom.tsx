import React from 'react'
interface HeroProps { cityName: string; }
export const TableCom = ({ cityName }: HeroProps) => {
    return (
        <div id='TableCom'>
            <table>
                <tr>
                    <th className='first'>Types of Business	</th>
                    <th >MICRO in Udyog Aadhar	</th>
                    <th >SMALL in Udyog Aadhar	</th>
                    <th className='last'>MEDIUM Udyog Aadhar</th>
                </tr>
                <tr>
                    <td>Manufacturing Business	</td>
                    <td>Rs 2,500,000	</td>
                    <td>Less than Rs 50,000,000	</td>
                    <td>Less than Rs 100,000,000</td>
                </tr>
                <tr>
                    <td>Service Business	</td>
                    <td>Less than Rs 10,00,000	</td>
                    <td>Less than Rs 20,000,000	</td>
                    <td>Less than Rs 50,000,000</td>
                </tr>
            </table>
        </div>
    )
}
