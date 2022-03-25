import React from 'react';
import '../assets/table.css';

export const Searchresults = ({ data }) => {
    const util_plate_name = (x) => {
        return `${x.stateCode} ${x.midAlph} ${x.midNo} ${x.plateNo}`;
    };

    return (
        <>
            <hr />
            <table>
                <thead id='tableHead'>
                    <tr>
                        <th>Track</th>
                        <th>Plate Number</th>
                        <th>Track Vehicle</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => {
                        console.log(row);
                        return (
                            <tr>
                                <td>
                                    <a href='#'>
                                        <i className='fa fa-search' />
                                    </a>
                                </td>
                                <td>{util_plate_name(row)}</td>
                                <td>
                                    <a className='status status-paid' href='#'>
                                        Click Me
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
export default Searchresults;
