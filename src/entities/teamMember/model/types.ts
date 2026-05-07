export interface MemberType {
  name: string;
  githubId: string;
  role: string;
  avatarUrl: string;
}

export interface NotionRichText {
  plain_text: string;
}

export interface NotionMemberProperties {
  name: { title: NotionRichText[] };
  githubId: { rich_text: NotionRichText[] };
  role: { rich_text: NotionRichText[] };
}

export interface NotionPage {
  properties: NotionMemberProperties;
}
