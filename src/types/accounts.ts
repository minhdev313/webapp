export interface StudentType {
  code: string;
  email: string;
  name: string;
  phone_number: string;
  sub_major_id: number;
}

export interface LectureType {
  name: string;
  email: string;
  phone_number: string;
  sub_major_id: number;
}

export interface UserType {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  user_type: string;
}