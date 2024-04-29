import { FaDownload, FaFilePdf, FaPrint } from "react-icons/fa";
// import moduleName from 'module';
import imageone from '../../../assets/Screenshot 2024-04-29 152346.png'
const Payslip = () => {
  return (
    <div data-aos="zoom-in">
      {/* title */}
      <div className="flex justify-between mb-20">
        <div>
          <h1 className="font-semibold text-4xl">Payslip</h1>
          <p className="text-2xl">Dashboard/Payslip</p>
        </div>
        <div className="flex  px-12">
          <button className="btn text-gray-600 rounded-none border-2 border-gray-800" ><FaDownload /></button>
          <button className="btn text-gray-600 rounded-none border-2 border-gray-800" ><FaFilePdf /></button>
          <button className="btn text-gray-600 rounded-none border-2 border-gray-800" ><FaPrint /></button>
        </div>
      </div>
      {/* receipt */}
      <div className="h-[800px] bg-white shadow-lg">
        <div>
          <h3 className="underline uppercase text-center p-5  text-2xl">
            PAYSLIP FOR THE MONTH OF FEB 2019
          </h3>
        </div>
        {/* subdiv */}
        <div className="flex justify-between px-4">
          <div className="flex flex-col gap-10">
            <div>
              <img src={imageone} className="h-28 pl-5" alt="" />
              <p className="w-56 ">
                Dreamguy's Technologies
                3864 Quiet Valley Lane,
                Sherman Oaks, CA, 91403
              </p>
            </div>
            <p className="w-64">
              <span className="font-bold">John Doe <br /></span>
              Web Designer <br />
              Employee ID: FT-0009 <br />
              Joining Date: 1 Jan 2013
            </p>
          </div>
          <div>
            <div className="mt-20">
              <h1 className="font-semibold text-4xl">PAYSLIP #49029</h1>
              <p className="text-2xl">Salary Month: March, 2019</p>
            </div>
          </div>
        </div>

        {/* table-1 */}
     <div className="flex mt-20 gap-20 justify-center align-middle items-center">
     <div  >
     <h2 className="text-2xl font-bold mb-2">Earnings</h2>

          <table className="border-collapse border border-black w-[400px] ">
            
            <tbody>
   <tr className="border border-1 border-gray-400">
    <td>Basic Salary</td>
    <td>$6500</td>
  </tr>
   <tr className="border border-1 border-gray-400">
    <td>House Rent Allowance (H.R.A.)</td>
    <td>$400</td>
  </tr>
   <tr className="border border-1 border-gray-400">
    <td>Conveyance</td>
    <td>$600</td>
  </tr>
   <tr className="border border-1 border-gray-400">
    <td>Other Allowance</td>
    <td>$80</td>
  </tr>
   <tr className="border border-1 border-gray-400">
    <td>Total Earnings</td>
    <td>$500</td>
  </tr>
</tbody>
          </table>
        </div>

        {/* table-2 */}
        <div className=" ">
          <h1 className="text-2xl font-bold mb-2"> Dedication </h1>
          <table className="border-collapse border border-black w-[400px] ">

          <tbody>
  <tr className="border border-1 border-gray-400">
    <td>Tax Deducted at Source (T.D.S.) </td>
    <td>$6500</td>
  </tr>
  <tr className="border border-1 border-gray-400">
    <td>Provident Fund</td>
    <td>$400</td>
  </tr>
  <tr className="border border-1 border-gray-400">
    <td>ESI</td>
    <td>$600</td>
  </tr>
  <tr className="border border-1 border-gray-400">
    <td>Loan</td>
    <td>$80</td>
  </tr>
  <tr className="border border-1 border-gray-400">
    <td>Total Deductions</td>
    <td>$500</td>
  </tr>
</tbody>
          </table>
        </div>
     </div>
     <h1 className="font-bold text-center text-xl">Net Salary: $59698 (Fifty nine thousand six hundred and ninety eight only.)</h1>
      </div>
    </div>
  );
};

export default Payslip;
