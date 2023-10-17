import { InvoiceInterface } from 'interfaces/invoice';
import { ReviewInterface } from 'interfaces/review';
import { TaskInterface } from 'interfaces/task';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  start_date?: any;
  end_date?: any;
  budget?: number;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  invoice?: InvoiceInterface[];
  review?: ReviewInterface[];
  task?: TaskInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    invoice?: number;
    review?: number;
    task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
  user_id?: string;
}
