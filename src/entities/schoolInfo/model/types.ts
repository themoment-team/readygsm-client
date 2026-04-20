export interface InfoCardType {
  category: string;
  descriptions: string[];
}

export interface InfoSectionType {
  title: string;
  cards: InfoCardType[];
}
