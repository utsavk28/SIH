import React from 'react';
import '../assets/table.css';

export const Searchresults = ({ data }) => {
    console.log(data);
    return (
        <>
            <hr />

            <table>
                <thead id='tableHead'>
                    <tr>
                        <th>Track</th>
                        <th>Plate Number</th>
                        {/* <th>Image</th> */}
                        <th>Track Vehicle</th>
                        {/* <th>Amount</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* 
{ data.balance ?. data.map(el =>{

  return (
<>


<td>
<a href="#">
  {" "}
  <i className="fa fa-search" />
</a>

</td>

<td>{el.plateno}</td>

<td>
<a className="status status-paid" href="#">
 {el.balance}
</a>
</td>



</>
  );

      
})} */}

                        <td>
                            <a href='#'>
                                {' '}
                                <i className='fa fa-search' />
                            </a>
                        </td>
                        <td>MH46W1753</td>
                        {/* <td>1/5/2021</td> */}
                        <td>
                            <a className='status status-paid' href='#'>
                                Click Me
                            </a>
                        </td>
                        {/* <td class="amount">$520.18</td> */}
                    </tr>
                    <tr>
                        <td>
                            <a href='#'>
                                {' '}
                                <i className='fa fa-search' />
                            </a>
                        </td>
                        <td>MH01P2491</td>
                        {/* <td>1/4/2021</td> */}
                        <td>
                            <a className='status status-paid' href='#'>
                                Click Me
                            </a>
                        </td>
                        {/* <td class="amount">$415.25</td> */}
                    </tr>
                    <tr>
                        <td>
                            <a href='#'>
                                {' '}
                                <i className='fa fa-search' />
                            </a>
                        </td>
                        <td>UP46W1234</td>
                        {/* <td>1/2/2021</td> */}
                        <td>
                            <a className='status status-paid' href='#'>
                                Click Me
                            </a>
                        </td>
                        {/* <td class="amount">$1324.84</td> */}
                    </tr>
                    <tr>
                        <td>
                            <a href='#'>
                                {' '}
                                <i className='fa fa-search' />
                            </a>
                        </td>
                        <td>GJ03T5678</td>
                        {/* <td>12/30/2020</td> */}
                        <td>
                            <a className='status status-paid' href='#'>
                                Click Me
                            </a>
                        </td>
                        {/* <td class="amount">$998.26</td> */}
                    </tr>
                    <tr>
                        <td>
                            <a href='#'>
                                {' '}
                                <i className='fa fa-search' />
                            </a>
                        </td>
                        <td>GJ03Y5678</td>
                        {/* <td>12/18/2020</td> */}
                        <td>
                            <a className='status status-paid' href='#'>
                                click Me
                            </a>
                        </td>
                        {/* <td class="amount">$1152.35</td> */}
                    </tr>
                </tbody>
            </table>
        </>
    );
};
export default Searchresults;
