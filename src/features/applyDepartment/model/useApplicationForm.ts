import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { ApplicationFormSchema, type ApplicationFormType } from './schema';

export const useApplicationForm = () => {
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);

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
    // TODO: API 연동
    console.log(data);
  });

  return {
    form,
    isSchoolModalOpen,
    setIsSchoolModalOpen,
    handleSubmit,
  };
};
