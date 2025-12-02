import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { HiBell, HiLogout } from 'react-icons/hi';

const breadcrumbLabels = {
  dashboard: 'Dashboard',
  revenue: 'Doanh thu',
  research: 'Đề tài nghiên cứu',
  personnel: 'Quản lý nhân sự',
  asset: 'Quản lý tài sản',
  report: 'Quản lý báo cáo',
  profile: 'Hồ sơ cá nhân',
  accountmanager: 'Quản lý tài khoản',
  invoice: 'Hóa đơn',
};

const roleLabels = {
  rector: 'Viện trưởng',
  principal: 'Trưởng phòng',
  division: 'Trưởng bộ phận',
  accountant: 'Kế toán',
};

const formatLabel = (segment) => {
  if (!segment) return '';
  if (breadcrumbLabels[segment]) return breadcrumbLabels[segment];
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return null;
  }

  // Obtener el rol de la ruta actual
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const role = pathSegments[0] || user.role;
  const segments = pathSegments.slice(1); // Remover el rol del path
  const displaySegments = segments.length ? segments : ['dashboard'];

  const breadcrumbs = displaySegments.map((segment, index) => {
    const path = `/${role}/${segments.slice(0, index + 1).join('/')}`;
    return {
      label: formatLabel(segment),
      path,
      isLast: index === displaySegments.length - 1,
    };
  });

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(-2);
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      <nav className="flex items-center gap-2 text-sm text-gray-500">
        <Link to={`/${role}/dashboard`} className="hover:text-blue-600">
          Trang chủ
        </Link>
        {breadcrumbs.map((crumb) => (
          <div key={crumb.path} className="flex items-center gap-2">
            <span>/</span>
            {crumb.isLast ? (
              <span className="text-gray-900 font-medium">{crumb.label}</span>
            ) : (
              <Link to={crumb.path} className="hover:text-blue-600">
                {crumb.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-4 justify-end">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
          {getInitials(user.name)}
        </div>
        <div className="text-right">
          <p className="text-base font-semibold text-gray-900 whitespace-nowrap">
            {user.name}
          </p>
          <p className="text-sm text-gray-500">{roleLabels[user.role] || user.position}</p>
        </div>
        <button
          type="button"
          className="relative flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 text-gray-600 hover:bg-blue-50 transition-colors"
          aria-label="Thông báo"
        >
          <HiBell className="w-5 h-5" />
          <span className="absolute top-2 right-2 block w-2 h-2 rounded-full bg-red-500" />
        </button>
        <button
          onClick={handleLogout}
          type="button"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors border border-gray-200"
          aria-label="Đăng xuất"
        >
          <HiLogout className="w-5 h-5" />
          <span className="text-sm font-medium">Đăng xuất</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
