import { getActivityList } from '@/entities/activity';
import { AdminSection } from '@/widgets/adminSection';

const AdminPage = async () => {
  const activities = (await getActivityList())?.data ?? [];

  return <AdminSection activities={activities} />;
};

export default AdminPage;
