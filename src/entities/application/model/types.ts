export interface ApplicationType {
  id: number;
  activityId: number;
  userId: number;
  name: string;
  grade: number;
  classNumber: number;
  number: number;
  schoolName: string;
  phoneNumber: string;
  familyPhoneNumber: string;
}

export interface PostApplicationRequestType {
  name: string;
  grade: number;
  classNumber: number;
  number: number;
  schoolName: string;
  phoneNumber: string;
  familyPhoneNumber: string;
}

export interface PostApplicationMutationInput extends PostApplicationRequestType {
  userId: number;
  activityId: number;
}
