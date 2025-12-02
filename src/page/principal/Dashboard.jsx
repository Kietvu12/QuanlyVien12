import { FaWallet, FaGlobe, FaUsers, FaChartLine } from 'react-icons/fa';

const cards = [
  {
    label: 'Đề tài đang quản lý',
    value: '45',
    change: '+5',
    changeColor: 'text-emerald-500',
    icon: FaGlobe,
  },
  {
    label: 'Nhân sự phòng ban',
    value: '32',
    change: '+2',
    changeColor: 'text-emerald-500',
    icon: FaUsers,
  },
  {
    label: 'Báo cáo đã gửi',
    value: '28',
    change: '+3',
    changeColor: 'text-blue-500',
    icon: FaChartLine,
  },
  {
    label: 'Tỷ lệ hoàn thành',
    value: '85%',
    change: '+5%',
    changeColor: 'text-emerald-500',
    icon: FaWallet,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6 py-6">
      <div className="px-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard - Trưởng phòng</h1>
        <p className="text-sm text-gray-500">Tổng quan hoạt động của phòng ban</p>
      </div>

      <section className="px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="flex items-center justify-between rounded-2xl bg-white shadow-sm px-6 py-5"
              >
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium text-gray-400">{card.label}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-semibold text-gray-900">
                      {card.value}
                    </span>
                    <span className={`text-xs font-semibold ${card.changeColor}`}>
                      {card.change}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500 text-white">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6">
        <div className="rounded-2xl bg-white shadow-sm px-6 py-5">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Hoạt động gần đây</h2>
          <p className="text-sm text-gray-500">Thông tin hoạt động của phòng ban sẽ được hiển thị tại đây</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

