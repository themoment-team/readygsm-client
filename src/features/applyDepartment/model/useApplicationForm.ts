import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { usePostApplication } from '@/entities/application';

import { ApplicationFormSchema, type ApplicationFormType } from './schema';

export const useApplicationForm = (activityId: number, userId: number, onSuccess?: () => void) => {
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
  const { mutate: postApplication } = usePostApplication();

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
    postApplication(
      {
        userId,
        activityId,
        name: data.name,
        grade: Number(data.grade),
        classNumber: Number(data.classNum),
        number: Number(data.number),
        schoolName: data.schoolName,
        phoneNumber: data.phone,
        familyPhoneNumber: data.guardianPhone,
      },
      {
        onSuccess: () => {
          toast.success('학과 체험 신청이 완료되었습니다.');
          onSuccess?.();
        },
        onError: () => toast.error('신청 중 오류가 발생했습니다.'),
      },
    );
  });

  return {
    form,
    isSchoolModalOpen,
    setIsSchoolModalOpen,
    handleSubmit,
  };
};
