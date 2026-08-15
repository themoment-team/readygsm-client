import { MemberType, NotionPage } from '../model/types';

const NOTION_API = 'https://api.notion.com/v1';

export async function getTeamMembers(): Promise<MemberType[]> {
  const DATABASE_ID = process.env.NOTION_MEMBER_DATABASE_ID;
  const SECRET_KEY = process.env.NOTION_SECRET_API_KEY;

  const res = await fetch(`${NOTION_API}/databases/${DATABASE_ID}/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${SECRET_KEY}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    next: { revalidate: process.env.NODE_ENV === 'production' ? 3600 : 0 },
  });

  if (!res.ok) throw new Error(`Notion API error: ${res.status}`);

  const data = await res.json();
  const members: MemberType[] = data.results.map((page: NotionPage) => {
    const githubId = page.properties.githubId.rich_text[0]?.plain_text ?? '';
    return {
      name: page.properties.name.title[0]?.plain_text ?? '',
      githubId,
      role: page.properties.role.rich_text[0]?.plain_text ?? '',
      avatarUrl: `https://github.com/${githubId}.png`,
    };
  });

  return members
    .map((member) => ({ member, sortKey: Math.random() }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ member }) => member);
}
