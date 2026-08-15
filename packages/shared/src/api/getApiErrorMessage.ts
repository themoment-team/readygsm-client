import { type AxiosError, isAxiosError } from 'axios';

import type { ApiResponseType } from './types';

export const isClientApiError = (error: unknown): error is AxiosError<ApiResponseType<null>> => {
  const status = isAxiosError(error) ? error.response?.status : undefined;
  return status !== undefined && status >= 400 && status < 500;
};

export const getApiErrorMessage = (error: unknown, fallbackMessage: string) => {
  if (!isClientApiError(error)) {
    return fallbackMessage;
  }

  return error.response?.data?.message?.trim() || fallbackMessage;
};
