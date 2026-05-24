import getActivityList from '@/entities/activity/api/getActivityList';
import { ActivityFormView } from '@/features/manageActivity';

const AdminFormPage = async () => {
  const response = await getActivityList();
  const isFirstActivity = !response?.data?.length;

  return <ActivityFormView mode="create" isFirstActivity={isFirstActivity} />;
};

export default AdminFormPage;
