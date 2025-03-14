import React, { useState, useMemo } from "react";
import { LucideEdit, LucideDownload, LucidePlus, LucideSearch } from "lucide-react";
import Papa from "papaparse";
import ReactPaginate from "react-paginate";
import CustomModal from "../Modal/CustomModal";
import Checkbox from "../ui/Checkbox"; 
import InnerModalInputs from "../Modal/InnerModalInputs";

const CustomTable = ({ columns, data, title, onAdd }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const itemsPerPage = 5;

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  const downloadCSV = () => {
    const csvData = Papa.unparse(filteredData);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.replace(" ", "_")}_data.csv`;
    link.click();
  };

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
    setIsModalOpen(false);
  };

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentPageData = filteredData.slice(offset, offset + itemsPerPage);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-md focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <LucideSearch size={18} className="absolute left-3 top-2.5 text-gray-500" />
        </div>

        {/* Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-3 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            <LucidePlus size={16} className="mr-2" />
            Add {title}
          </button>

          <button
            onClick={downloadCSV}
            className="p-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          >
            <LucideDownload size={18} />
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b bg-gray-100">
            {columns.map((col) => (
              <th key={col.accessor} className="p-3 text-left text-sm font-semibold">
                {col.Header}
              </th>
            ))}
            <th className="p-3 text-left text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-100">
              {columns.map((col) => (
                <td key={col.accessor} className="p-3 text-sm">
                  {/* If "Active" column, show a real checkbox */}
                  {col.accessor === "active" ? (
                    <Checkbox checked={row[col.accessor]} onChange={() => {}} color="blue" />
                  ) : (
                    row[col.accessor]
                  )}
                </td>
              ))}
              <td className="p-3 text-sm">
                {/* Edit Button - Opens Blank Modal */}
                <button
                  onClick={() => handleEditClick(row)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <LucideEdit size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm">{filteredData.length} Rows</p>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName="flex space-x-2"
          activeClassName="text-white bg-blue-600 rounded px-3 py-1"
          pageClassName="px-3 py-1 border rounded"
        />
      </div>

      {isModalOpen && (
        <CustomModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedRow ? `Edit ${title}` : `Add ${title}`}
        >
         <InnerModalInputs/>
        </CustomModal>
      )}
    </div>
  );
};

export default CustomTable;
