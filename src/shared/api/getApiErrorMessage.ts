import { isAxiosError } from 'axios';

import type { ApiResponseType } from './types';

const getResponseStatus = (error: unknown) =>
  isAxiosError(error) ? error.response?.status : undefined;

export const isClientApiError = (error: unknown) => {
  const status = getResponseStatus(error);
  return status !== undefined && status >= 400 && status < 500;
};

export const getApiErrorMessage = (error: unknown, fallbackMessage: string) => {
  if (!isAxiosError<ApiResponseType<null>>(error) || !isClientApiError(error)) {
    return fallbackMessage;
  }

  return error.response?.data?.message?.trim() || fallbackMessage;
};
