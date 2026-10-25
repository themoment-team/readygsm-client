export interface SchoolType {
  SD_SCHUL_CODE: string;
  SCHUL_NM: string;
  ORG_RDNMA: string;
}

export interface SchoolSearchResponseType {
  schoolInfo?: [unknown, { row: SchoolType[] }];
}

export interface SchoolFormFieldsType {
  schoolName: string;
  schoolAddress: string;
}
