import { getActivityById } from '@/entities/activity';
import { getMyApplication } from '@/entities/application';
import { getMyInfo } from '@/entities/user';
import { ApplicationSection } from '@/widgets/applicationSection';

const ApplicationsPage = async () => {
  const user = await getMyInfo();
  const isLoggedIn = !!user && user.role !== 'UNAUTHENTICATED';

  const application = isLoggedIn ? await getMyApplication(user.id) : undefined;
  const activity = application ? await getActivityById(application.activityId) : undefined;

  return <ApplicationSection user={user} application={application} activity={activity} />;
};

export default ApplicationsPage;
