'use client';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import { Controller, useForm, type UseFormReturn } from 'react-hook-form';

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
  ActivityBaseFormSchema,
  type ActivityBaseFormType,
  ActivityFirstCreateFormSchema,
  type ActivityFirstCreateFormType,
  toActivityFirstCreateReqDto,
  toActivityWithRegistrationReqDto,
  toFormValues,
} from '../model/types';
import { usePatchActivity } from '../model/usePatchActivity';
import { usePostActivity } from '../model/usePostActivity';

interface ActivityFormViewProps {
  mode: 'create' | 'edit';
  activity?: ActivityType;
  isFirstActivity?: boolean;
  registrationPeriod?: Pick<ActivityType, 'registrationStartAt' | 'registrationEndAt'>;
}

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 5 }, (_, i) => CURRENT_YEAR + i - 1);
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const HOURS = Array.from({ length: 24 }, (_, i) => i);
const MINUTES = Array.from({ length: 6 }, (_, i) => i * 10);

const getMinuteOptions = (value?: string) => {
  const numVal = value !== undefined && value !== '' ? Number(value) : NaN;
  return !isNaN(numVal) && !MINUTES.includes(numVal)
    ? [...MINUTES, numVal].sort((a, b) => a - b)
    : MINUTES;
};

const ActivityFormView = ({
  mode,
  activity,
  isFirstActivity,
  registrationPeriod,
}: ActivityFormViewProps) => {
  const router = useRouter();
  const { postActivity, isPending: isCreating } = usePostActivity();
  const { patchActivity, isPending: isEditing } = usePatchActivity(activity?.id ?? 0);
  const isPending = isCreating || isEditing;

  const withRegistration = mode === 'create' && isFirstActivity;

  const firstCreateForm = useForm<ActivityFirstCreateFormType>({
    resolver: zodResolver(ActivityFirstCreateFormSchema),
  });

  const baseForm = useForm<ActivityBaseFormType>({
    resolver: zodResolver(ActivityBaseFormSchema),
    defaultValues: activity ? toFormValues(activity) : undefined,
  });

  const { isValid, isDirty } = (withRegistration ? firstCreateForm : baseForm).formState;

  const handleSuccess = () => {
    router.push('/admin');
    router.refresh();
  };

  const handleFirstCreateSubmit = (values: ActivityFirstCreateFormType) => {
    postActivity(toActivityFirstCreateReqDto(values), { onSuccess: handleSuccess });
  };

  const handleBaseSubmit = (values: ActivityBaseFormType) => {
    if (mode === 'create' && registrationPeriod) {
      postActivity(toActivityWithRegistrationReqDto(values, registrationPeriod), {
        onSuccess: handleSuccess,
      });
    } else if (activity) {
      patchActivity(toActivityWithRegistrationReqDto(values, activity), {
        onSuccess: handleSuccess,
      });
    }
  };

  const renderBaseFields = (form: UseFormReturn<ActivityBaseFormType>) => {
    const formErrors = form.formState.errors;
    return (
      <>
        <FormField label="학과 체험 이름" error={formErrors.name?.message}>
          <Input
            {...form.register('name')}
            placeholder="학과 체험이름을 입력해주세요"
            error={!!formErrors.name}
          />
        </FormField>

        <FormField label="학과 체험 장소" error={formErrors.place?.message}>
          <Input
            {...form.register('place')}
            placeholder="학과 체험 장소를 입력해주세요"
            error={!!formErrors.place}
          />
        </FormField>

        <FormField label="학과 체험 설명" error={formErrors.description?.message}>
          <textarea
            {...form.register('description')}
            placeholder="학과 체험 설명을 입력해주세요"
            rows={3}
            className={cn(
              'bg-pure-white text-neutral-dark placeholder:text-slate-utility min-w-0 resize-none rounded-[0.5rem] border px-3 py-2 text-sm leading-5 font-normal transition-colors outline-none',
              formErrors.description
                ? 'border-error-red focus-visible:border-error-red'
                : 'border-border-variant hover:border-soft-gray focus-visible:border-brand-primary',
            )}
          />
        </FormField>

        <FormField label="최대 인원 수" error={formErrors.maxApplicant?.message}>
          <Input
            {...form.register('maxApplicant')}
            type="number"
            min={1}
            placeholder="학과 체험 최대 인원 수를 입력해주세요"
            error={!!formErrors.maxApplicant}
          />
        </FormField>

        <FormField label="날짜">
          <div className={cn('flex gap-2')}>
            <Controller
              name="activityYear"
              control={form.control}
              render={({ field }) => (
                <Select value={field.value ?? ''} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={cn('w-full flex-1', formErrors.activityYear && 'border-error-red')}
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
              control={form.control}
              render={({ field }) => (
                <Select value={field.value ?? ''} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={cn('w-full flex-1', formErrors.activityMonth && 'border-error-red')}
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
              control={form.control}
              render={({ field }) => (
                <Select value={field.value ?? ''} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={cn('w-full flex-1', formErrors.activityDay && 'border-error-red')}
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
            <Controller
              name="activityStartHour"
              control={form.control}
              render={({ field }) => (
                <Select value={field.value ?? ''} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={cn(
                      'w-full flex-1',
                      formErrors.activityStartHour && 'border-error-red',
                    )}
                  >
                    <SelectValue placeholder="시 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>시 선택</SelectLabel>
                      {HOURS.map((h) => (
                        <SelectItem key={h} value={String(h)}>
                          {h}시
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            <Controller
              name="activityStartMinute"
              control={form.control}
              render={({ field }) => (
                <Select value={field.value ?? ''} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={cn(
                      'w-full flex-1',
                      formErrors.activityStartMinute && 'border-error-red',
                    )}
                  >
                    <SelectValue placeholder="분 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>분 선택</SelectLabel>
                      {getMinuteOptions(field.value).map((m) => (
                        <SelectItem key={m} value={String(m)}>
                          {m}분
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </FormField>

        <FormField label="체험 종료 시간">
          <div className={cn('flex gap-2')}>
            <Controller
              name="activityEndHour"
              control={form.control}
              render={({ field }) => (
                <Select value={field.value ?? ''} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={cn(
                      'w-full flex-1',
                      formErrors.activityEndHour && 'border-error-red',
                    )}
                  >
                    <SelectValue placeholder="시 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>시 선택</SelectLabel>
                      {HOURS.map((h) => (
                        <SelectItem key={h} value={String(h)}>
                          {h}시
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            <Controller
              name="activityEndMinute"
              control={form.control}
              render={({ field }) => (
                <Select value={field.value ?? ''} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={cn(
                      'w-full flex-1',
                      formErrors.activityEndMinute && 'border-error-red',
                    )}
                  >
                    <SelectValue placeholder="분 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>분 선택</SelectLabel>
                      {getMinuteOptions(field.value).map((m) => (
                        <SelectItem key={m} value={String(m)}>
                          {m}분
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </FormField>
      </>
    );
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

        {withRegistration ? (
          <form
            onSubmit={firstCreateForm.handleSubmit(handleFirstCreateSubmit)}
            className={cn('flex flex-col gap-4')}
          >
            {renderBaseFields(firstCreateForm as unknown as UseFormReturn<ActivityBaseFormType>)}

            <FormField
              label="체험 접수 시작일"
              error={firstCreateForm.formState.errors.registrationStartMonth?.message}
            >
              <div className={cn('flex gap-2')}>
                <Input
                  {...firstCreateForm.register('registrationStartMonth')}
                  placeholder="월을 입력해주세요"
                  type="number"
                  min={1}
                  max={12}
                  className={cn('flex-1')}
                  error={!!firstCreateForm.formState.errors.registrationStartMonth}
                />
                <Input
                  {...firstCreateForm.register('registrationStartDay')}
                  placeholder="일을 입력해주세요"
                  type="number"
                  min={1}
                  max={31}
                  className={cn('flex-1')}
                  error={!!firstCreateForm.formState.errors.registrationStartDay}
                />
              </div>
            </FormField>

            <FormField
              label="체험 접수 종료일"
              error={firstCreateForm.formState.errors.registrationEndMonth?.message}
            >
              <div className={cn('flex gap-2')}>
                <Input
                  {...firstCreateForm.register('registrationEndMonth')}
                  placeholder="월을 입력해주세요"
                  type="number"
                  min={1}
                  max={12}
                  className={cn('flex-1')}
                  error={!!firstCreateForm.formState.errors.registrationEndMonth}
                />
                <Input
                  {...firstCreateForm.register('registrationEndDay')}
                  placeholder="일을 입력해주세요"
                  type="number"
                  min={1}
                  max={31}
                  className={cn('flex-1')}
                  error={!!firstCreateForm.formState.errors.registrationEndDay}
                />
              </div>
            </FormField>

            <div
              className={cn('mt-2')}
              onClick={() => {
                if (!isValid) firstCreateForm.trigger();
              }}
            >
              <Button type="submit" variant="default" size="full" disabled={isPending || !isValid}>
                학과 체험 만들기
              </Button>
            </div>
          </form>
        ) : (
          <form
            onSubmit={baseForm.handleSubmit(handleBaseSubmit)}
            className={cn('flex flex-col gap-4')}
          >
            {renderBaseFields(baseForm)}

            <div
              className={cn('mt-2')}
              onClick={() => {
                if (mode === 'create' && !isValid) baseForm.trigger();
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
        )}
      </div>
    </main>
  );
};

export default ActivityFormView;
