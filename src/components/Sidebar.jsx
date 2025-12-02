import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  HiHome, 
  HiUser,
  HiLogout
} from 'react-icons/hi';
import { 
  FaDollarSign, 
  FaFileAlt,
  FaFlask,
  FaUsers,
  FaBox,
  FaChartBar,
  FaReceipt,
  FaFileInvoiceDollar
} from 'react-icons/fa';
import logo from '../assets/icon/logo.png';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  const getMenuItems = () => {
    const basePath = `/${user.role}`;
    
    switch (user.role) {
      case 'rector':
        return [
          { 
            name: 'Dashboard', 
            icon: HiHome, 
            path: `${basePath}/dashboard`,
            active: location.pathname.includes('/dashboard')
          },
          { 
            name: 'Doanh thu', 
            icon: FaDollarSign, 
            path: `${basePath}/revenue`,
            active: location.pathname.includes('/revenue')
          },
          { 
            name: 'Đề tài nghiên cứu', 
            icon: FaFlask, 
            path: `${basePath}/research`,
            active: location.pathname.includes('/research')
          },
          { 
            name: 'Quản lý nhân sự', 
            icon: FaUsers, 
            path: `${basePath}/personnel`,
            active: location.pathname.includes('/personnel')
          },
          { 
            name: 'Quản lý tài sản', 
            icon: FaBox, 
            path: `${basePath}/asset`,
            active: location.pathname.includes('/asset')
          },
          { 
            name: 'Quản lý báo cáo', 
            icon: FaChartBar, 
            path: `${basePath}/report`,
            active: location.pathname.includes('/report')
          },
        ];
      
      case 'principal':
        return [
          { 
            name: 'Dashboard', 
            icon: HiHome, 
            path: `${basePath}/dashboard`,
            active: location.pathname.includes('/dashboard')
          },
          { 
            name: 'Đề tài nghiên cứu', 
            icon: FaFlask, 
            path: `${basePath}/research`,
            active: location.pathname.includes('/research')
          },
          { 
            name: 'Quản lý nhân sự', 
            icon: FaUsers, 
            path: `${basePath}/personnel`,
            active: location.pathname.includes('/personnel')
          },
          { 
            name: 'Quản lý báo cáo', 
            icon: FaChartBar, 
            path: `${basePath}/report`,
            active: location.pathname.includes('/report')
          },
        ];
      
      case 'division':
        return [
          { 
            name: 'Dashboard', 
            icon: HiHome, 
            path: `${basePath}/dashboard`,
            active: location.pathname.includes('/dashboard')
          },
          { 
            name: 'Đề tài nghiên cứu', 
            icon: FaFlask, 
            path: `${basePath}/research`,
            active: location.pathname.includes('/research')
          },
          { 
            name: 'Quản lý nhân sự', 
            icon: FaUsers, 
            path: `${basePath}/personnel`,
            active: location.pathname.includes('/personnel')
          },
        ];
      
      case 'accountant':
        return [
          { 
            name: 'Dashboard', 
            icon: HiHome, 
            path: `${basePath}/dashboard`,
            active: location.pathname.includes('/dashboard')
          },
          { 
            name: 'Doanh thu', 
            icon: FaDollarSign, 
            path: `${basePath}/revenue`,
            active: location.pathname.includes('/revenue')
          },
          { 
            name: 'Đề tài nghiên cứu', 
            icon: FaFlask, 
            path: `${basePath}/research`,
            active: location.pathname.includes('/research')
          },
          { 
            name: 'Quản lý nhân sự', 
            icon: FaUsers, 
            path: `${basePath}/personnel`,
            active: location.pathname.includes('/personnel')
          },
          { 
            name: 'Quản lý tài sản', 
            icon: FaBox, 
            path: `${basePath}/asset`,
            active: location.pathname.includes('/asset')
          },
          { 
            name: 'Quản lý báo cáo', 
            icon: FaChartBar, 
            path: `${basePath}/report`,
            active: location.pathname.includes('/report')
          },
          { 
            name: 'Hóa đơn', 
            icon: FaReceipt, 
            path: `${basePath}/invoice`,
            active: location.pathname.includes('/invoice')
          },
        ];
      
      default:
        return [];
    }
  };

  const getAccountPages = () => {
    const basePath = `/${user.role}`;
    
    const commonPages = [
      { 
        name: 'Hồ sơ cá nhân', 
        icon: HiUser, 
        path: `${basePath}/profile`,
        active: location.pathname.includes('/profile')
      }
    ];

    // Solo rector puede ver gestión de cuentas
    if (user.role === 'rector') {
      commonPages.push({
        name: 'Quản lý tài khoản', 
        icon: FaFileAlt, 
        path: `${basePath}/accountmanager`,
        active: location.pathname.includes('/accountmanager')
      });
    }

    return commonPages;
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = getMenuItems();
  const accountPages = getAccountPages();

  return (
    <div className="w-80 h-screen bg-white flex flex-col">
      {/* Header với Logo và Title */}
      <div className="flex items-center p-6 gap-3">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-12 h-12 object-contain"
        />
        <h1 className="text-base font-semibold text-black whitespace-nowrap">
          Viện Tin học Xây Dựng
        </h1>
      </div>

      {/* Main Navigation Items */}
      <div className="flex-1 px-4 py-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                item.active
                  ? 'bg-blue-100 text-black font-bold'
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                  item.active
                    ? 'bg-transparent'
                    : 'bg-gray-100'
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    item.active
                      ? 'text-blue-600'
                      : 'text-blue-400'
                  }`}
                />
              </div>
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Account Pages Section */}
      <div className="px-4 py-2 border-t border-gray-300">
        <h2 className="text-sm font-bold text-black mb-2 px-4">ACCOUNT PAGES</h2>
        {accountPages.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                item.active
                  ? 'bg-blue-100 text-black font-bold'
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                  item.active
                    ? 'bg-transparent'
                    : 'bg-gray-100'
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    item.active
                      ? 'text-blue-600'
                      : 'text-blue-400'
                  }`}
                />
              </div>
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
        
        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100">
            <HiLogout className="w-5 h-5 text-red-400" />
          </div>
          <span className="text-sm">Đăng xuất</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
