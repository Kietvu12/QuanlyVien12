import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hồ sơ cá nhân - Trưởng bộ phận</h1>
      <p className="text-gray-600">Thông tin tài khoản của {user?.name}</p>
    </div>
  );
};

export default Profile;

