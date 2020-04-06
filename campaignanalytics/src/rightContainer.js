import React from 'react';
import './App.scss';

export default function rightContainer(props) {
    return(
        <ul className="text-center" style={{listStyleType:"none", paddingInlineStart:0}}>
            <li className="mt-4 mb-4">
                <b>Our Top 3 Customers</b>
            </li>
            <li className="mb-3">
                Gold
                <br></br>
                <img src={'../Images/Bacteria1.png'} alt="Bacteria1" style={{maxHeight:"5rem"}}/>
            </li>
            <li className="mb-3">
                Silver
                <br></br>
                <img src={'../Images/Bacteria2.png'} alt="Bacteria2" style={{maxHeight:"5rem"}}/>
            </li>
            <li className="mb-3">
                Bronze
                <br></br>
                <img src={'../Images/Bacteria3.png'} alt="Bacteria3" style={{maxHeight:"5rem"}}/>
            </li>

        </ul>
    )
}