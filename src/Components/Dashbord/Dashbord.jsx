import { useState } from 'react';
import { FaAngleRight, FaHome } from 'react-icons/fa';
import { FaTicket } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoIosReturnLeft } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid xl:grid-cols-6 lg:grid-cols-8">
        <div className="xl:col-span-1 lg:col-span-2">
          <div className="sticky top-0 z-50 h-full bg-white p-10 text-black text-2xl">
            <ul>
              <li>
                <NavLink className='flex justify-start align-middle gap-2' to='/'><FaHome /> Home</NavLink>
              </li>
              <li>
                <div className="relative">
                  <div onClick={toggleDropdown} className='flex justify-between align-middle items-center btn-accent'>
                    <button className="focus:outline-none btn-accent gap-3 flex justify-center align-middle "><FaTicket className='mt-2' />Payroll</button>
                    { dropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward /> }
                  </div>
                  <ul className={`absolute left-0 mt-2 bg-gray-100 rounded-md shadow-lg shadow-inner transition-all duration-400 ease-in-out origin-left transform ${dropdownOpen ? 'scale-x-100' : 'scale-x-0'}`}>
                    <li><NavLink to='/salary' className="block px-4 py-2 list-disc text-gray-800 hover:bg-gray-200">Employ Salary</NavLink></li>
                    <li><NavLink to='/payslip' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Payslip</NavLink></li>
                    <li><NavLink to='/payroll-item' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Payroll Items</NavLink></li>
                  </ul>
                </div>
              </li>
              <li style={{ transition: 'margin-top 0.3s', marginTop: dropdownOpen ? '240px' : '0' }}>
                <NavLink to='#'> footer</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="xl:col-span-5 lg:col-span-6 h-full overflow-y-auto min-h-screen px-20 pt-10 bg-yellow-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
