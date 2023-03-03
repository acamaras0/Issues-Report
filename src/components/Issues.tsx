import { IssuesArray } from "../interface/interfaces";
import SingleIssue from "./SingleIssue";

interface Props {
  issueArray: IssuesArray[];
  setIssueArray: React.Dispatch<React.SetStateAction<IssuesArray[]>>;
}

const Issues = ({ issueArray, setIssueArray }: Props) => {
  console.log(issueArray);

  return (
    <div className="flex flex-wrap justify-evenly">
      {issueArray.length > 0 ? (
        issueArray.map((issue) => (
          <SingleIssue
            issue={issue}
            issueArray={issueArray}
            setIssueArray={setIssueArray}
            key={issue.id}
          />
        ))
      ) : (
        <p>No existing issues.</p>
      )}
    </div>
  );
};

export default Issues;
