import { IssuesArray } from "../interface/interfaces";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgDanger, CgProfile } from "react-icons/cg";
import Moment from "react-moment";
import { useState } from "react";

interface Props {
  issue: IssuesArray;
  issueArray: IssuesArray[];
  setIssueArray: React.Dispatch<React.SetStateAction<IssuesArray[]>>;
}

const SingleIssue = ({ issue, issueArray, setIssueArray }: Props) => {
  const [message, setMessage] = useState<string>("");
  const handleDelete = (id: number) => {
    setIssueArray(issueArray.filter((issue) => issue.id !== id));
  };
  return (
    <div className="flex items-start flex-wrap max-w-sm bg-gray-50 p-5 shadow-lg m-3">
      <div className="p-4">
        <p className="flex items-center mb-4 text-zinc-400">
          <CgProfile className="text-yellow-400 mr-2  w-5 h-5" />
          {issue.login.toUpperCase()}
          <Moment fromNow className="text-zinc-400 ml-9">
            {issue.date}
          </Moment>
        </p>
        <p className="flex items-center">
          <HiOutlineDesktopComputer className="text-blue-300 mr-2  w-5 h-5" />
          {issue.location}
        </p>
        <p className="flex">
          <span>
            <CgDanger className="text-red-400 mr-2 w-5 h-5" />
          </span>
          {issue.issue}
        </p>
      </div>
      <button
        className="bg-red-600 px-6 py-2.5 text-xs mt-4 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-yellow-400 hover:shadow-lg focus:bg-zinc-700 focus:text-white focus:shadow-lg"
        onClick={() => handleDelete(issue.id)}
      >
        DELETE
      </button>
    </div>
  );
};

export default SingleIssue;
