import { LectureType } from "./accounts";

export interface TopicType {
  id: number;
  name: string;
  path: string;
  teacher: LectureType;
}
