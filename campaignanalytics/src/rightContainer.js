// import React from 'react';
// import './App.scss';
// import * as bs from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import AppContext from './context';

// export default function rightContainer(props) {
//     const context = React.useContext(AppContext);


//     const top3 = context.campaign.sort((parseFloat(camp.current_amount)/parseFloat(camp.goal)*100).toFixed(0)).slice(0,2)
//     console.log("top3: " + top3)
//     return(
//         <ul className="text-center" style={{listStyleType:"none", paddingInlineStart:0}}>
//             <li className="mt-4 mb-4">
//                 <b>Our Top 3 Customers</b>
//             </li>
//             {/* {top3.map((camp) => {
//                 return (
//                     <Link to={`/details/${camp.campaign_id}`} className='nav-link'>
//                         {camp.title}
//                     </Link>
//                 )})} */}
//             <li className="mb-3">
//                 Gold
//                 <br></br>
//                 <img src={'../Images/Bacteria1.png'} alt="Bacteria1" style={{maxHeight:"5rem"}}/>
//             </li>
//             <li className="mb-3">
//                 Silver
//                 <br></br>
//                 <img src={'../Images/Bacteria2.png'} alt="Bacteria2" style={{maxHeight:"5rem"}}/>
//             </li>
//             <li className="mb-3">
//                 Bronze
//                 <br></br>
//                 <img src={'../Images/Bacteria3.png'} alt="Bacteria3" style={{maxHeight:"5rem"}}/>
//             </li>

//         </ul>
//     )
// }


import React from 'react';
import './App.scss';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppContext from './context';

export default function RightContainer(props) {
    const context = React.useContext(AppContext);

    const top5 = context.campaign.sort((camp,b) => (parseFloat(b.current_amount)) - (parseFloat(camp.current_amount))).slice(0,5)

    return(
        <bs.Nav className="flex-column p-1">
            <p className="text-center my-2" style={{fontSize:"2rem"}}>Top 5 Campaigns</p>
            <ol className="m-2 p-2">
                {top5.map((camp) => {
                    return (
                        <Link key={camp.campaign_id} to={`/details/${camp.campaign_id}`} className='nav-link 'style={
                            {fontSize:"100%",
                            width:"100%",}}>
                            <li>{camp.title}</li>
                        </Link>
                    )})}
             </ol>
        </bs.Nav>

    )
}