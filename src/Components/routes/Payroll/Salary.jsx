const Salary = () => {
  // Dummy data for demonstration
  const tableData = [
    { id: 1, name: "Alice Smith", role: "Employee", status: "Approval", startDate: "2024-04-01", endDate: "2024-04-30", salary: "$5500" },
    { id: 2, name: "Bob Johnson", role: "Manager", status: "Pending", startDate: "2024-04-01", endDate: "2024-04-30", salary: "$6200" },
    { id: 3, name: "Charlie Brown", role: "Manager", status: "Pending", startDate: "2024-04-01", endDate: "2024-04-30", salary: "$6100" },
    { id: 4, name: "Diana Miller", role: "Manager", status: "Pending", startDate: "2024-04-01", endDate: "2024-04-30", salary: "$6400" },
    { id: 5, name: "Emily Wilson", role: "Manager", status: "Pending", startDate: "2024-04-01", endDate: "2024-04-30", salary: "$6000" },
    { id: 6, name: "Frank Davis", role: "Manager", status: "Pending", startDate: "2024-04-01", endDate: "2024-04-30", salary: "$5900" },
    { id: 7, name: "Grace Lee", role: "Manager", status: "Pending", startDate: "2024-04-01", endDate: "2024-04-30", salary: "$6300" },
    { id: 8, name: "Henry Garcia", role: "Manager", status: "Pending", startDate: "2024-04-01", endDate: "2024-04-30", salary: "$6100" },
    { id: 9, name: "Isabella Clark", role: "Manager", status: "Pending", startDate: "2024-04-01", endDate: "2024-04-30", salary: "$5800" },
    { id: 10, name: "Jack Turner", role: "Manager", status: "Pending", startDate: "2024-04-01", endDate: "2024-04-30", salary: "$6000" },
  ];
  

  return (
    <div data-aos="zoom-in">
      {/* title */}
      <div className="flex justify-between mb-20">
        <div>
          <h1 className="font-semibold text-4xl">Employee Salary</h1>
          <p className="text-2xl">Dashboard/Salary</p>
        </div>
        <div>
          <button className="btn rounded-3xl w-56  font-bold text-white text-xl bg-orange-400">+Add Salary</button>
        </div>
      </div>
      {/* search */}
      <div className=" grid grid-cols-6 gap-5 lg:gap-10 xl:gap-20 justify-start align-middle items-center">
        <div className="col-span-6">
          <input type="text" className="border-black border  h-12  w-[70%] rounded-xl text-start px-4" placeholder="Employee Name" />
        </div>
        <div>
          <select className="border-black border  h-12  text-start px-4" placeholder="Role">
            <option value="">Role</option>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
            <option value="ceo">CEO</option>
          </select>
        </div>
        <div>
          <select className="border-black border  h-12 text-start px-4" placeholder="Status">
            <option value="">Status</option>
            <option value="approval">Approval</option>
            <option value="pending">Pending</option>
            <option value="reject">Reject</option>
          </select>
        </div>
        <div>
          <input type="date" className="border-black border h-12 text-start px-4" placeholder="Date" />
        </div>
        <div>
          <input type="date" className="border-black border  h-12  text-start px-4" placeholder="Date" />
        </div>
        <div>
          <button className="btn bg-green-600 text-white w-36 rounded-3xl *
            ml-10 font-bold ">Search</button>
        </div>
      </div>
      {/* table */}
      <div className="mt-20  no-scrollbar overflow-x-auto
       overflow-y-auto max-h-[300px] 
      " >
      {/* Table header with dynamic width */}
      <div className="table-header sticky top-0  z-1 bg-[#fff]" >
        <table className="border-collapse border border-black w-full table-auto">
          <thead>
            <tr>
              <th className="text-center  w-16 ">ID</th>
              <th className="text-center w-44 px-4">Name</th>
              <th className="text-center w-44  px-4">Role</th>
              <th className="text-center w-44  px-4">Status</th>
              <th className="text-center w-44  px-4">Start Date</th>
              <th className="text-center w-44  px-4">End Date</th>
              <th className="text-center  w-44 px-4">Salary</th>
            </tr>
          </thead>
        </table>
      </div>
      {/* Table body */}
      <table className="border-collapse border border-black w-full table-auto">
        <tbody>
          {/* Rendering rows */}
          {tableData.map((row, index) => (
            <tr key={row.id} className={`h-8 ${index % 2 === 0 ? 'bg-gray-200 hover:bg-blue-100' : 'bg-yellow-50 hover:bg-blue-100'}`}>
              <td className="text-center w-44  border bottom-2 border-black px-4">{row.id}</td>
              <td className="text-center w-44 border bottom-2 border-black px-4">{row.name}</td>
              <td className="text-center w-44  border bottom-2 border-black px-4">{row.role}</td>
              <td className="text-center w-44  border bottom-2 border-black px-4">{row.status}</td>
              <td className="text-center w-44  border bottom-2 border-black px-4">{row.startDate}</td>
              <td className="text-center w-44  border bottom-2 border-black px-4">{row.endDate}</td>
              <td className="text-center w-44  border bottom-2 border-black px-4">{row.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Salary;
