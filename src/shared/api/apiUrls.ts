export const authUrl = {
  postAuth: (provider: string) => `/v1/auth/${provider}`,
  postSignOut: () => '/v1/auth/logout',
} as const;

export const userUrl = {
  getMyInfo: () => '/v1/user/me',
} as const;

export const utilityUrl = {
  patchUserRole: () => '/v1/utility/user/role',
} as const;

export const activityUrl = {
  getActivityList: () => '/v1/activity',
} as const;
