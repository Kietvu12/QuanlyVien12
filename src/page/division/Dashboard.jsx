import { FaFlask, FaUsers, FaChartBar, FaCheckCircle } from 'react-icons/fa';

const cards = [
  {
    label: 'Đề tài bộ phận',
    value: '18',
    change: '+3',
    changeColor: 'text-emerald-500',
    icon: FaFlask,
  },
  {
    label: 'Nhân sự bộ phận',
    value: '15',
    change: '+1',
    changeColor: 'text-emerald-500',
    icon: FaUsers,
  },
  {
    label: 'Đề tài hoàn thành',
    value: '12',
    change: '+2',
    changeColor: 'text-emerald-500',
    icon: FaCheckCircle,
  },
  {
    label: 'Báo cáo tháng',
    value: '8',
    change: '+1',
    changeColor: 'text-blue-500',
    icon: FaChartBar,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6 py-6">
      <div className="px-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard - Trưởng bộ phận</h1>
        <p className="text-sm text-gray-500">Tổng quan hoạt động của bộ phận</p>
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
          <h2 className="text-lg font-bold text-gray-900 mb-4">Tiến độ đề tài</h2>
          <p className="text-sm text-gray-500">Thông tin tiến độ các đề tài của bộ phận sẽ được hiển thị tại đây</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

