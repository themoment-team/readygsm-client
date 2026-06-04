'use server';

import { revalidateTag } from 'next/cache';

export const revalidateActivityList = async () => {
  revalidateTag('activity-list', 'default');
};
