import getActivityList from '@/entities/activity/api/getActivityList';
import { ActivityFormView } from '@/features/manageActivity';

const AdminFormPage = async () => {
  const response = await getActivityList();
  const isFirstActivity = !response?.data?.length;
  const firstActivity = response?.data?.[0];
  const registrationPeriod = firstActivity
    ? {
        registrationStartAt: firstActivity.registrationStartAt,
        registrationEndAt: firstActivity.registrationEndAt,
      }
    : undefined;

  return (
    <ActivityFormView
      mode="create"
      isFirstActivity={isFirstActivity}
      registrationPeriod={registrationPeriod}
    />
  );
};

export default AdminFormPage;
