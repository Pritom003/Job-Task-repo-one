import { useState } from 'react';

const PayrollItems = () => {
  const [selectedRoute, setSelectedRoute] = useState('Addition'); // State to keep track of the selected route

  const handleRouteChange = (route) => {
    setSelectedRoute(route);
  };

  return (
    <div data-aos="zoom-in" className="grid grid-rows-3 p-10 h-[600px]">
   
      {/* title */}
        <div className=' row-span-2'>
          <h1 className="font-semibold text-4xl">Payroll Items</h1>
          <p className="text-2xl">Dashboard/Payroll Items</p>
        </div>
     <div className='flex  gap-5'>
      {/* sidenav */}
     <div className="w-1/4 ">
        <ul className='text-start pl-8 w-48 h-56 border-gray-600 py-4 border-x-4   text-2xl font-bold'>
          <li className={ `hover:bg-orange-300 hover:text-white p-2 w-32 mt-2 ${selectedRoute === 'Addition' ? ' border-b-2 border-black' : ' text-gray-400'} `} onClick={() => handleRouteChange('Addition')}>Addition</li>
          <li className={ `hover:bg-orange-300 hover:text-white mt-2  w-32 p-2 ${selectedRoute === 'Overtime' ?  ' border-b-2 border-black' : ' text-gray-400'} `}  onClick={() => handleRouteChange('Overtime')}>Overtime</li>
          <li className={ `hover:bg-orange-300 hover:text-white  w-36 mt-2   p-2 ${selectedRoute === 'Deduction' ? ' border-b-2 border-black' : ' text-gray-400'} `}  onClick={() => handleRouteChange('Deduction')}>Deduction</li>
        </ul>
      </div>
        {/* Render Different Tables based on the selected route */}
       <div>
       <table className="border-collapse border border-black w-full">
          <tbody>
            {selectedRoute === 'Addition' && (
              <>
                <tr>
                  <td>Addition Row 1, Column 1</td>
                  <td>Addition Row 1, Column 2</td>
                </tr>
                <tr>
                  <td>Addition Row 2, Column 1</td>
                  <td>Addition Row 2, Column 2</td>
                </tr>
              </>
            )}
            {selectedRoute === 'Overtime' && (
              <>
                <tr>
                  <td>Overtime Row 1, Column 1</td>
                  <td>Overtime Row 1, Column 2</td>
                </tr>
                <tr>
                  <td>Overtime Row 2, Column 1</td>
                  <td>Overtime Row 2, Column 2</td>
                </tr>
              </>
            )}
            {selectedRoute === 'Deduction' && (
              <>
                <tr>
                  <td>Deduction Row 1, Column 1</td>
                  <td>Deduction Row 1, Column 2</td>
                </tr>
                <tr>
                  <td>Deduction Row 2, Column 1</td>
                  <td>Deduction Row 2, Column 2</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
       </div>
     </div>
      </div>
    
  );
};

export default PayrollItems;
