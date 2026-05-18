import { z } from 'zod';

export const ApplicationFormSchema = z
  .object({
    name: z.string().min(1, { error: '정확한 이름을 입력해주세요' }),
    grade: z.enum(['1', '2', '3']),
    classNum: z.enum(['1', '2', '3', '4']),
    number: z
      .string()
      .min(1, { error: '번호를 입력해주세요' })
      .regex(/^\d+$/, { error: '숫자만 입력해주세요' }),
    schoolName: z.string().min(1, { error: '학교명을 입력해주세요' }),
    schoolAddress: z.string(),
    phone: z
      .string({ error: '정확한 전화번호를 입력해주세요' })
      .regex(/^0\d{1,2}-\d{3,4}-\d{4}$/, { error: '정확한 전화번호를 입력해주세요' }),
    guardianPhone: z
      .string({ error: '정확한 전화번호를 입력해주세요' })
      .regex(/^0\d{1,2}-\d{3,4}-\d{4}$/, { error: '정확한 전화번호를 입력해주세요' }),
    guardianRelation: z.enum(['부', '모', '기타']),
    customGuardianRelation: z.string(),
    agreed: z
      .boolean()
      .refine((v) => v === true, { message: '개인정보 수집 및 이용에 동의해주세요' }),
  })
  .superRefine((data, ctx) => {
    if (data.guardianRelation === '기타' && !data.customGuardianRelation.trim()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '보호자 관계를 입력해주세요',
        path: ['customGuardianRelation'],
      });
    }
  });

export type ApplicationFormType = z.infer<typeof ApplicationFormSchema>;
