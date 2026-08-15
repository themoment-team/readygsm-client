import { type AxiosError, isAxiosError } from 'axios';

import type { ApiResponseType } from './types';

export const getApiErrorStatus = (error: unknown) =>
  isAxiosError(error) ? error.response?.status : undefined;

export const isClientApiError = (error: unknown): error is AxiosError<ApiResponseType<null>> => {
  const status = getApiErrorStatus(error);
  return status !== undefined && status >= 400 && status < 500;
};

export const getApiErrorMessage = (error: unknown, fallbackMessage: string) => {
  if (!isClientApiError(error)) {
    return fallbackMessage;
  }

  return error.response?.data?.message?.trim() || fallbackMessage;
};
