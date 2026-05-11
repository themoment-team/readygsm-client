export interface ActivityType {
  id: number;
  name: string;
  place: string;
  description: string;
  maxApplicant: number;
  activityDate: string;
  start: string;
  end: string;
}

export interface ActivityListResponseType {
  status: string;
  code: number;
  message: string;
  data: ActivityType[];
}
