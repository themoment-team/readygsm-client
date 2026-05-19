import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { usePostApplication } from '@/entities/application';
import { useGetMyInfo } from '@/entities/user';

import { ApplicationFormSchema, type ApplicationFormType } from './schema';

export const useApplicationForm = (activityId: number, onSuccess?: () => void) => {
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
  const { mutate: postApplication } = usePostApplication();
  const { data: user } = useGetMyInfo();

  const form = useForm<ApplicationFormType>({
    resolver: zodResolver(ApplicationFormSchema),
    defaultValues: {
      name: '',
      grade: undefined,
      classNum: undefined,
      number: '',
      schoolName: '',
      schoolAddress: '',
      phone: '',
      guardianPhone: '',
      guardianRelation: undefined,
      customGuardianRelation: '',
      agreed: false,
    },
    mode: 'onChange',
  });

  const handleSubmit = form.handleSubmit((data) => {
    if (!user) return;
    postApplication(
      {
        userId: user.id,
        activityId,
        name: data.name,
        grade: Number(data.grade),
        classNumber: Number(data.classNum),
        number: Number(data.number),
        schoolName: data.schoolName,
        phoneNumber: data.phone,
        familyPhoneNumber: data.guardianPhone,
      },
      { onSuccess },
    );
  });

  return {
    form,
    isSchoolModalOpen,
    setIsSchoolModalOpen,
    handleSubmit,
  };
};
