export interface ActivityType {
  id: number;
  name: string;
  place: string;
  description: string;
  maxApplicant: number;
  currentApplicant: number;
  activityDate: string;
  registrationStartAt: string;
  registrationEndAt: string;
  activityStartTime: string;
  activityEndTime: string;
}

export interface ActivityListResponseType {
  status: string;
  code: number;
  message: string;
  data: ActivityType[];
}
