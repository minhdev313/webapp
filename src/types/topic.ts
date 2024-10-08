import { LectureType } from "./accounts";

export interface Topic {
  id: number;
  name: string;
  path: string;
  teacher: LectureType;
}