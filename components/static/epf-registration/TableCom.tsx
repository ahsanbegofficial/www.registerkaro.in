import React from 'react'

export const TableCom = () => {
    return (
        <div id='LLP'>
            <table>
                <tr>
                    <th className='first'>Delay period</th>
                    <th className='last'>Penalty rate per annum</th>
                </tr>
                <tr>
                    <td>Up to 2 months</td>
                    <td>5%</td>
                </tr>
                <tr>
                    <td>2 to 4 months</td>
                    <td>10%</td>
                </tr>
                <tr>
                    <td>4 to 6 months</td>
                    <td>15%</td>
                </tr>
                <tr>
                    <td>More than 6 months</td>
                    <td>25%</td>
                </tr>
            </table>
        </div>
    )
}
