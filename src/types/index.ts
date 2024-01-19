export type UserType = 'intern' | 'company' | 'mentor' | 'educator';

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  userType: string;
  mobileNumber: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface JobPostFormState {
  title: string;
  employment_type: number;
  minimum_experience: number;
  description: string;
  department: string;
  country_id: number;
  job_status: number;
  city: string;
  state?: string;
  postal_code: string;
  approved_salary_range_minimum: number;
  approved_salary_range_maximum: number;
  confidential: boolean;
  private: boolean;
  address: number;
  education: number;
  college: number;
  grade_point_average: number;
  cover_letter: number;
  references: number;
  desired_salary: number;
  earliest_start_date: number;
  website: number;
  relocate: number;
  jh_id?: number;
}
