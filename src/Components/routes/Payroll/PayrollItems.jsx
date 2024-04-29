import { useState } from 'react';

const PayrollItems = () => {
  const [selectedRoute, setSelectedRoute] = useState('Addition'); // State to keep track of the selected route

  const handleRouteChange = (route) => {
    setSelectedRoute(route);
  };

  return (
    <div data-aos="zoom-in" className="grid grid-rows-6 p-10 h-[600px]">
   
      {/* title */}
      <div className='row-span-2 border-b-2 border-gray-400 mb-10'>
        <h1 className="font-semibold text-4xl">Payroll Items</h1>
        <p className="text-2xl">Dashboard/Payroll Items</p>
      </div>

      {/* sidenav */}
     <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 '>
     <div className="w-1/4 ">
        <ul className='text-start xl:pl-8 xl:w-48 lg:w-32 lg:h-56 flex lg:block  border-gray-600 py-4 lg:text-xl text-2xl font-bold'>
          <li className={`hover:bg-orange-300 hover:text-white p-2 lg:w-28 xl:w-32 mt-2 ${selectedRoute === 'Addition' ? ' border-b-2 border-black' : ' text-gray-400'}`} onClick={() => handleRouteChange('Addition')}>Addition</li>
          <li className={`hover:bg-orange-300 hover:text-white mt-2  w-32 p-2 ${selectedRoute === 'Overtime' ? ' border-b-2 border-black' : ' text-gray-400'}`} onClick={() => handleRouteChange('Overtime')}>Overtime</li>
          <li className={`hover:bg-orange-300 hover:text-white  w-36 mt-2   p-2 ${selectedRoute === 'Deduction' ? ' border-b-2 border-black' : ' text-gray-400'}`} onClick={() => handleRouteChange('Deduction')}>Deduction</li>
        </ul>
      </div>

      {/* Render Different Tables based on the selected route */}
      <div className="overflow-x-auto xl:col-span-3 lg:col-span-2 my-auto">
        <table className="border-collapse border table border-black w-full bg-orange-50 shadow-2xl">
          <tbody>
            {/* Addition Table */}
            {selectedRoute === 'Addition' && (
              <>
                <tr className='hover:bg-orange-300 hover:text-white font-bold'>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Unit</th>
                  <th>Activity</th>
                </tr>
                <tr  className='hover:bg-orange-300 hover:text-white font-bold'>
                  {/* Your data for Addition */}
                  <td>Addition Row 1, Column 1</td>
                  <td>Addition Row 1, Column 2</td>
                  <td>Addition Row 1, Column 3</td>
                  <td>Addition Row 1, Column 4</td>
                </tr>
                <tr  className='hover:bg-orange-300 hover:text-white font-bold'>
                  {/* Your data for Addition */}
                  <td>Addition Row 2, Column 1</td>
                  <td>Addition Row 2, Column 2</td>
                  <td>Addition Row 2, Column 3</td>
                  <td>Addition Row 2, Column 4</td>
                </tr>
              </>
            )}

            {/* Overtime Table */}
            {selectedRoute === 'Overtime' && (
              <>
                <tr  className='hover:bg-orange-300 hover:text-white font-bold'>
                  <th>Name</th>
                  <th>Rate</th>
                  <th>Action</th>
                </tr>
                <tr  className='hover:bg-orange-300 hover:text-white font-bold'>
                  {/* Your data for Overtime */}
                  <td>Overtime Row 1, Column 1</td>
                  <td>Overtime Row 1, Column 2</td>
                  <td>Overtime Row 1, Column 3</td>
                </tr>
                <tr  className='hover:bg-orange-300 hover:text-white font-bold'>
                  {/* Your data for Overtime */}
                  <td>Overtime Row 2, Column 1</td>
                  <td>Overtime Row 2, Column 2</td>
                  <td>Overtime Row 2, Column 3</td>
                </tr>
              </>
            )}

            {/* Deduction Table */}
            {selectedRoute === 'Deduction' && (
              <>
                <tr  className='hover:bg-orange-300 hover:text-white font-bold'>
                  <th>Name</th>
                  <th>Unit</th>
                  <th>Action</th>
                </tr>
                <tr  className='hover:bg-orange-300 hover:text-white font-bold'>
                  {/* Your data for Deduction */}
                  <td>Deduction Row 1, Column 1</td>
                  <td>Deduction Row 1, Column 2</td>
                  <td>Deduction Row 1, Column 3</td>
                </tr>
                <tr  className='hover:bg-orange-300 hover:text-white font-bold'>
                  {/* Your data for Deduction */}
                  <td>Deduction Row 2, Column 1</td>
                  <td>Deduction Row 2, Column 2</td>
                  <td>Deduction Row 2, Column 3</td>
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
