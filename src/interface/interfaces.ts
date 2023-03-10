export interface IssuesArray {
  id: number;
  login: string;
  issue: string;
  location: string;
  subject: string;
  date: string;
  isFixed: boolean;
}

export interface FormProps {
  setLogin: (value: string) => void;
  setIssue: (value: string) => void;
  setLocation: (value: string) => void;
  setRadio: (value: string) => void;
  handleAdd: (e: React.FormEvent) => void;
}

export interface IssuesProps {
  issueArray: IssuesArray[];
  setIssueArray: React.Dispatch<React.SetStateAction<IssuesArray[]>>;
}
