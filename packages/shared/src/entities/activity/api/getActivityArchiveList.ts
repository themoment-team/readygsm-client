import type { ActivityType } from '../model/types';

interface NotionRichText {
  plain_text: string;
}

interface NotionDateProperty {
  date: { start: string; end: string | null } | null;
}

interface NotionActivityArchiveProperties {
  이름: { title: NotionRichText[] };
  장소: { rich_text: NotionRichText[] };
  설명: { rich_text: NotionRichText[] };
  '최대 인원': { number: number | null };
  '체험 일시': NotionDateProperty;
  '체험 종료 시각': { rich_text: NotionRichText[] };
  '신청 시작일': NotionDateProperty;
  '신청 종료일': NotionDateProperty;
}

interface NotionActivityArchivePage {
  properties: NotionActivityArchiveProperties;
}

const NOTION_API = 'https://api.notion.com/v1';

export async function getActivityArchiveList(): Promise<ActivityType[]> {
  const DATABASE_ID = process.env.NOTION_ACTIVITY_ARCHIVE_DATABASE_ID;
  const SECRET_KEY = process.env.NOTION_SECRET_API_KEY;

  if (!DATABASE_ID || !SECRET_KEY) return [];

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

  return data.results.map((page: NotionActivityArchivePage, index: number) => {
    const properties = page.properties;

    return {
      id: index,
      name: properties['이름'].title[0]?.plain_text ?? '',
      place: properties['장소'].rich_text[0]?.plain_text ?? '',
      description: properties['설명'].rich_text[0]?.plain_text ?? '',
      maxApplicant: properties['최대 인원'].number ?? 0,
      currentApplicant: 0,
      activityDate: properties['체험 일시'].date?.start.slice(0, 10) ?? '',
      activityStartTime: properties['체험 일시'].date?.start.slice(11, 16) ?? '',
      activityEndTime: properties['체험 종료 시각'].rich_text[0]?.plain_text ?? '',
      registrationStartAt: properties['신청 시작일'].date?.start ?? '',
      registrationEndAt: properties['신청 종료일'].date?.start ?? '',
    };
  });
}
