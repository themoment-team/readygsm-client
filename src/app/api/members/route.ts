import { NextResponse } from 'next/server';

import { getTeamMembers } from '@/entities/teamMember';

export async function GET() {
  const members = await getTeamMembers();

  if (members.length === 0) {
    return NextResponse.json({ error: 'Failed to fetch members' }, { status: 502 });
  }

  return NextResponse.json(members);
}
