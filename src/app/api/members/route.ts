import { NextResponse } from 'next/server';

import { getTeamMembers } from '@/entities/teamMember';

export async function GET() {
  try {
    const members = await getTeamMembers();
    return NextResponse.json(members);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch members' }, { status: 502 });
  }
}
