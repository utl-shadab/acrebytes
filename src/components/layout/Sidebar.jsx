import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  LucideHome, LucideBuilding, LucideBox, LucideUsers, LucideTag,
  LucideDatabase, LucideShieldCheck, LucideLogOut, LucideSettings, LucideChevronDown, LucideChevronRight,
  LogIn,
  LucideBuilding2,
  LucideLandPlot,
  LucideNotebookTabs,
  LucideFileCheck,
  LucideBookCheck, 
} from 'lucide-react';
import UserImage from "../../assets/user.webp";
import { useSidebar } from '../../context/SidebarContext';
import Logo from "/Logo.svg"

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', path: '/', icon: <LucideHome size={20} /> },
  { id: 'propertyListings', label: 'Property listings', path: '/property-listings', icon: <LucideNotebookTabs size={20} /> },
  { id: 'propertyConsultant', label: 'Property Consultant', path: '/property-consultant', icon: <LucideUsers size={20} /> },
  { id: 'areaProperties', label: 'Area properties', path: '/area-properties', icon: <LucideLandPlot size={20} /> },
  { id: 'realEstateCompanies', label: 'Real Estate Companies', path: '/real-estate-companies', icon: <LucideBuilding2 size={20} /> },
  { id: 'myEnquiries', label: 'My Enquiries', path: '/my-enquiries', icon: <LucideDatabase size={20} /> },
  { id: 'leadsGrowth', label: 'Leads growth (marketing)', path: '/leads-growth', icon: <LucideBookCheck size={20} /> },
];

function Sidebar() {
  const { isCollapsed } = useSidebar();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`bg-white text-black fixed h-full flex flex-col justify-between transition-all duration-300 ease-in-out ${isCollapsed ? 'w-14' : 'w-72'}`}>

      <div>
        <div className="flex h-16 items-center justify-start border-b border-gray-300">
          <div className="flex items-center justify-center px-4">
            <img src={Logo} alt="Logo" className={`transition-all duration-300 ease-in-out ${isCollapsed ? 'w-12' : 'w-12'}`} />

            {!isCollapsed && <h6 className="text-3xl font-light font-main ml-2">AcreBytes</h6>}
          </div>
        </div>

        <div className="py-4 overflow-y-auto h-[calc(100vh-13rem)]">
          <ul className="space-y-3 px-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isOpen = openMenu === item.id;

              return (
                <li key={item.id}>
                  {hasSubmenu ? (
                    <button
                      className={`flex items-center justify-between p-2.5 rounded-md transition-all duration-700 ease-in-out w-full 
                      ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-[#5d87ff20] hover:text-[#5D87FF] text-black'}`}
                      onClick={() => toggleMenu(item.id)}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        {!isCollapsed && <span className="ml-3">{item.label}</span>}
                      </div>
                      {!isCollapsed && (
                        <span className={`transition-transform duration-400 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${isOpen ? 'transform rotate-180' : ''}`}>
                          <LucideChevronDown size={16} />
                        </span>
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center p-2.5 rounded-md transition-all duration-700 ease-in-out w-full 
                      ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-[#5d87ff20] hover:text-[#5D87FF] text-black'}`}
                    >
                      {item.icon}
                      {!isCollapsed && <span className="ml-3">{item.label}</span>}
                    </Link>
                  )}

                  {!isCollapsed && hasSubmenu && (
                    <ul className={`mt-2 ml-6 space-y-1 transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      {item.submenu.map((subitem) => {
                        const isSubActive = location.pathname === subitem.path;
                        return (
                          <li key={subitem.id}>
                            <Link
                              to={subitem.path}
                              className={`flex items-center p-2 pl-5 rounded-md transition-all duration-600 ease-in-out 
                              ${isSubActive ? 'bg-[#5D87FF] text-white' : 'hover:bg-[#5d87ff20] hover:text-[#5D87FF] text-black'}`}
                            >
                              <span className={`w-2 h-2 rounded-full mr-2 transition-all duration-300 ease-in-out ${isSubActive ? 'bg-white' : 'bg-gray-400'}`}></span>
                              {subitem.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* User Profile Section (Bottom Fixed) */}
      <div className="p-3">
        {!isCollapsed ? (
          <div className="flex items-center bg-blue-50 p-2 rounded-lg">
            <img src={UserImage} alt="User" className="w-10 h-10 rounded-full" />
            <div className="ml-3">
              <h4 className="text-black font-medium">John Doe</h4>
              <p className="text-gray-500 text-sm">Admin</p>
            </div>
            <Link to="/login" className="ml-auto text-black hover:text-blue-700">
              <LucideLogOut size={20} />
            </Link>
          </div>
        ) : (
          <Link to="/login" className="flex items-center justify-center w-full p-2 rounded-lg text-black hover:bg-[#5d87ff20] hover:text-[#5D87FF]">
            <LucideLogOut size={24} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Sidebar;