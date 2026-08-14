'use server';

import { updateTag } from 'next/cache';

export const revalidateActivityList = async () => {
  updateTag('activity-list');
};
