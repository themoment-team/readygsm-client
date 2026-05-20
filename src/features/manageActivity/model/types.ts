import { z } from 'zod';

import type { ActivityType } from '@/entities/activity';

export const ActivityFormSchema = z.object({
  name: z.string().min(1, '학과 체험 이름을 입력해주세요').max(256),
  place: z.string().min(1, '학과 체험 장소를 입력해주세요').max(200),
  description: z.string().min(1, '학과 체험 설명을 입력해주세요').max(512),
  maxApplicant: z.string().min(1, '최대 인원 수를 선택해주세요'),
  registrationStartMonth: z.string().min(1, '월을 입력해주세요'),
  registrationStartDay: z.string().min(1, '일을 입력해주세요'),
  registrationEndMonth: z.string().min(1, '월을 입력해주세요'),
  registrationEndDay: z.string().min(1, '일을 입력해주세요'),
  activityYear: z.string().min(1, '년도를 선택해주세요'),
  activityMonth: z.string().min(1, '월을 선택해주세요'),
  activityDay: z.string().min(1, '일을 선택해주세요'),
  activityStartHour: z.string().min(1, '시를 입력해주세요'),
  activityStartMinute: z.string().min(1, '분을 입력해주세요'),
  activityEndHour: z.string().min(1, '시를 입력해주세요'),
  activityEndMinute: z.string().min(1, '분을 입력해주세요'),
});

export type ActivityFormType = z.infer<typeof ActivityFormSchema>;

const pad = (n: string | number) => String(n).padStart(2, '0');

export const toActivityReqDto = (values: ActivityFormType) => {
  const currentYear = new Date().getFullYear();
  return {
    name: values.name,
    place: values.place,
    description: values.description,
    maxApplicant: Number(values.maxApplicant),
    activityDate: `${values.activityYear}-${pad(values.activityMonth)}-${pad(values.activityDay)}`,
    registrationStartAt: `${currentYear}-${pad(values.registrationStartMonth)}-${pad(values.registrationStartDay)}T00:00:00`,
    registrationEndAt: `${currentYear}-${pad(values.registrationEndMonth)}-${pad(values.registrationEndDay)}T23:59:59`,
    activityStartTime: `${pad(values.activityStartHour)}:${pad(values.activityStartMinute)}`,
    activityEndTime: `${pad(values.activityEndHour)}:${pad(values.activityEndMinute)}`,
  };
};

export const toFormValues = (activity: ActivityType): ActivityFormType => {
  const [regStartDate] = activity.registrationStartAt.split('T');
  const [regEndDate] = activity.registrationEndAt.split('T');
  const [, regStartMonth, regStartDay] = regStartDate.split('-');
  const [, regEndMonth, regEndDay] = regEndDate.split('-');
  const [actYear, actMonth, actDay] = activity.activityDate.split('-');
  const [startHour, startMinute] = activity.activityStartTime.split(':');
  const [endHour, endMinute] = activity.activityEndTime.split(':');

  return {
    name: activity.name,
    place: activity.place,
    description: activity.description,
    maxApplicant: String(activity.maxApplicant),
    registrationStartMonth: String(parseInt(regStartMonth, 10)),
    registrationStartDay: String(parseInt(regStartDay, 10)),
    registrationEndMonth: String(parseInt(regEndMonth, 10)),
    registrationEndDay: String(parseInt(regEndDay, 10)),
    activityYear: actYear,
    activityMonth: String(parseInt(actMonth, 10)),
    activityDay: String(parseInt(actDay, 10)),
    activityStartHour: startHour,
    activityStartMinute: startMinute,
    activityEndHour: endHour,
    activityEndMinute: endMinute,
  };
};
