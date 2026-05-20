'use client';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

import type { ActivityType } from '@/entities/activity';
import { cn } from '@/shared/lib';
import {
  Button,
  FormField,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui';

import {
  ActivityFormSchema,
  type ActivityFormType,
  toActivityReqDto,
  toFormValues,
} from '../model/types';
import { usePatchActivity } from '../model/usePatchActivity';
import { usePostActivity } from '../model/usePostActivity';

interface ActivityFormViewProps {
  mode: 'create' | 'edit';
  activity?: ActivityType;
}

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 5 }, (_, i) => CURRENT_YEAR + i - 1);
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

const ActivityFormView = ({ mode, activity }: ActivityFormViewProps) => {
  const router = useRouter();
  const { postActivity, isPending: isCreating } = usePostActivity();
  const { patchActivity, isPending: isEditing } = usePatchActivity(activity?.id ?? 0);
  const isPending = isCreating || isEditing;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
    trigger,
  } = useForm<ActivityFormType>({
    resolver: zodResolver(ActivityFormSchema),
    defaultValues: activity ? toFormValues(activity) : undefined,
  });

  const handleSuccess = () => {
    router.push('/admin');
    router.refresh();
  };

  const onSubmit = (values: ActivityFormType) => {
    const dto = toActivityReqDto(values);
    if (mode === 'create') {
      postActivity(dto, { onSuccess: handleSuccess });
    } else {
      patchActivity(dto, { onSuccess: handleSuccess });
    }
  };

  return (
    <main
      className={cn(
        'flex min-h-[calc(100vh-6.25rem-11.3125rem)] flex-col items-center bg-white px-4 py-12',
      )}
    >
      <div className={cn('flex w-full max-w-155.5 flex-col gap-6')}>
        <button
          type="button"
          onClick={() => router.push('/admin')}
          className={cn(
            'text-secondary-slate flex w-fit cursor-pointer items-center gap-1 text-[1.25rem] font-semibold',
          )}
        >
          <ChevronLeft className={cn('size-4')} />
          이전으로
        </button>

        <h1 className={cn('text-neutral-dark text-[1.5rem] font-semibold')}>학과 체험 정보 작성</h1>

        <form onSubmit={handleSubmit(onSubmit)} className={cn('flex flex-col gap-4')}>
          <FormField label="학과 체험 이름" error={errors.name?.message}>
            <Input
              {...register('name')}
              placeholder="학과 체험이름을 입력해주세요"
              error={!!errors.name}
            />
          </FormField>

          <FormField label="학과 체험 장소" error={errors.place?.message}>
            <Input
              {...register('place')}
              placeholder="학과 체험 장소를 입력해주세요"
              error={!!errors.place}
            />
          </FormField>

          <FormField label="학과 체험 설명" error={errors.description?.message}>
            <textarea
              {...register('description')}
              placeholder="학과 체험 설명을 입력해주세요"
              rows={3}
              className={cn(
                'bg-pure-white text-neutral-dark placeholder:text-slate-utility min-w-0 resize-none rounded-[0.5rem] border px-3 py-2 text-sm leading-5 font-normal transition-colors outline-none',
                errors.description
                  ? 'border-error-red focus-visible:border-error-red'
                  : 'border-border-variant hover:border-soft-gray focus-visible:border-brand-primary',
              )}
            />
          </FormField>

          <FormField label="최대 인원 수" error={errors.maxApplicant?.message}>
            <Input
              {...register('maxApplicant')}
              type="number"
              min={1}
              placeholder="학과 체험 최대 인원 수를 입력해주세요"
              error={!!errors.maxApplicant}
            />
          </FormField>

          <FormField label="체험 접수 시작일">
            <div className={cn('flex gap-2')}>
              <Input
                {...register('registrationStartMonth')}
                placeholder="월을 입력해주세요"
                type="number"
                min={1}
                max={12}
                className={cn('flex-1')}
                error={!!errors.registrationStartMonth}
              />
              <Input
                {...register('registrationStartDay')}
                placeholder="일을 입력해주세요"
                type="number"
                min={1}
                max={31}
                className={cn('flex-1')}
                error={!!errors.registrationStartDay}
              />
            </div>
          </FormField>

          <FormField label="체험 접수 종료일">
            <div className={cn('flex gap-2')}>
              <Input
                {...register('registrationEndMonth')}
                placeholder="월을 입력해주세요"
                type="number"
                min={1}
                max={12}
                className={cn('flex-1')}
                error={!!errors.registrationEndMonth}
              />
              <Input
                {...register('registrationEndDay')}
                placeholder="일을 입력해주세요"
                type="number"
                min={1}
                max={31}
                className={cn('flex-1')}
                error={!!errors.registrationEndDay}
              />
            </div>
          </FormField>

          <FormField label="날짜">
            <div className={cn('flex gap-2')}>
              <Controller
                name="activityYear"
                control={control}
                render={({ field }) => (
                  <Select value={field.value ?? ''} onValueChange={field.onChange}>
                    <SelectTrigger
                      className={cn('flex-1', errors.activityYear && 'border-error-red')}
                    >
                      <SelectValue placeholder="년도 입력" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>날짜 선택</SelectLabel>
                        {YEARS.map((y) => (
                          <SelectItem key={y} value={String(y)}>
                            {y}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              <Controller
                name="activityMonth"
                control={control}
                render={({ field }) => (
                  <Select value={field.value ?? ''} onValueChange={field.onChange}>
                    <SelectTrigger
                      className={cn('flex-1', errors.activityMonth && 'border-error-red')}
                    >
                      <SelectValue placeholder="월 입력" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>날짜 선택</SelectLabel>
                        {MONTHS.map((m) => (
                          <SelectItem key={m} value={String(m)}>
                            {m}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              <Controller
                name="activityDay"
                control={control}
                render={({ field }) => (
                  <Select value={field.value ?? ''} onValueChange={field.onChange}>
                    <SelectTrigger
                      className={cn('flex-1', errors.activityDay && 'border-error-red')}
                    >
                      <SelectValue placeholder="일 입력" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>날짜 선택</SelectLabel>
                        {DAYS.map((d) => (
                          <SelectItem key={d} value={String(d)}>
                            {d}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </FormField>

          <FormField label="체험 시작 시간">
            <div className={cn('flex gap-2')}>
              <Input
                {...register('activityStartHour')}
                placeholder="시를 입력해주세요"
                type="number"
                min={0}
                max={23}
                className={cn('flex-1')}
                error={!!errors.activityStartHour}
              />
              <Input
                {...register('activityStartMinute')}
                placeholder="분을 입력해주세요"
                type="number"
                min={0}
                max={59}
                className={cn('flex-1')}
                error={!!errors.activityStartMinute}
              />
            </div>
          </FormField>

          <FormField label="체험 종료 시간">
            <div className={cn('flex gap-2')}>
              <Input
                {...register('activityEndHour')}
                placeholder="시를 입력해주세요"
                type="number"
                min={0}
                max={23}
                className={cn('flex-1')}
                error={!!errors.activityEndHour}
              />
              <Input
                {...register('activityEndMinute')}
                placeholder="분을 입력해주세요"
                type="number"
                min={0}
                max={59}
                className={cn('flex-1')}
                error={!!errors.activityEndMinute}
              />
            </div>
          </FormField>

          <div
            className={cn('mt-2')}
            onClick={() => {
              if (mode === 'create' && !isValid) trigger();
            }}
          >
            <Button
              type="submit"
              variant="default"
              size="full"
              disabled={isPending || (mode === 'create' ? !isValid : !isDirty)}
            >
              {mode === 'create' ? '학과 체험 만들기' : '학과 체험 수정하기'}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ActivityFormView;
