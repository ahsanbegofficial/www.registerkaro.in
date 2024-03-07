import React from 'react'
interface HeroProps {cityName: string;}
export const TableCom = ({ cityName }: HeroProps)  => {
    return (
        <div id='TableCom'>
            <table>
                <tr>
                    <th className='first'>Criteria	</th>
                    <th>Trust</th>
                    <th>Society	</th>
                    <th className='last'>Section 8 Company</th>
                </tr>
                <tr>
                    <td>Legal Framework	</td>
                    <td>Indian Trust Act of 1882</td>
                    <td>Societies Registration Act, 1860</td>
                    <td>Companies Act, 2013</td>
                  
                </tr>
                <tr>
                    <td>Main Objective</td>
                    <td>Charitable activities</td>
                    <td>Public welfare activities</td>
                    <td>Promotion of science, arts, sports, etc.</td>
                   
                </tr>
                <tr>
                    <td>Membership	</td>
                    <td>Trustees	</td>
                    <td>Members	</td>
                    <td>Shareholders</td>
                
                </tr>
                <tr>
                    <td>Governing Body	</td>
                    <td>Board of Trustees	</td>
                    <td>Governing Council	</td>
                    <td>Board of Directors</td>
                </tr>
                <tr>
                    <td>Governing Rules	</td>
                    <td>Trust Deed	</td>
                    <td>Memorandum and By-laws	</td>
                    <td>Memorandum and Articles of Association</td>
                    
                </tr>
                <tr>
                    <td>Registration Authority	</td>
                    <td>Registrar of Trusts	</td>
                    <td>Registrar of Societies	</td>
                    <td>Registrar of Companies (ROC)</td>
                </tr>
                <tr>
                    <td>Tax Exemption	</td>
                    <td>Section 12A and 80G	</td>
                    <td>Section 12A and 80G	</td>
                    <td>Section 8(1) and 12A</td>
                </tr>
            </table>
        </div>
    )
}