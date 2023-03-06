import { IssuesArray } from "../interface/interfaces";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgDanger } from "react-icons/cg";
import { BsTrash3Fill } from "react-icons/bs";
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
    <>
      {/* <div className="group/item hover:bg-slate-100 flex flex-col justify-between items-baseline max-w-sm w-full bg-gray-50 p-5 shadow-lg m-2">
        <div className="p-4">
          <p className="flex items-center text-lg">
            <HiOutlineDesktopComputer className="text-blue-300 mr-2 -mb-1 w-5 h-5" />
            {issue.location}
          </p>
          <p className="flex items-center mb-4 text-zinc-400 text-xs">
            Posted by {issue.login.toUpperCase()}
            <Moment fromNow className="text-zinc-400 ml-9">
              {issue.date}
            </Moment>
          </p>
          <p className="flex">
            <span>
              <CgDanger className="text-red-400 mr-2 w-5 h-5" />
            </span>
            {issue.issue}
          </p>
        </div>
        <div className="group/edit invisible group-hover/item:visible">
          <button
            className="bg-zinc-600 px-6 py-2.5 text-xs mt-4 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-lg focus:bg-zinc-700 focus:text-white focus:shadow-lg"
            onClick={() => handleDelete(issue.id)}
          >
            DELETE
          </button>
        </div>
      </div> */}

      <div className="group/item hover:bg-slate-100 w-70 bg-gray-50 p-2 shadow-lg m-2 flex justify-between">
        <div className="p-2">
          <p className="flex items-center text-lg">
            <HiOutlineDesktopComputer className="text-blue-300 mr-2 -mb-1 w-5 h-5" />
            {issue.location}
          </p>
          <p className="flex items-center mb-4 text-zinc-400 text-xs">
            Posted by{" "}
            <span className="ml-1 text-zinc-500">
              {" "}
              {issue.login.toUpperCase()}
            </span>
            <Moment fromNow className="text-zinc-400 ml-1">
              {issue.date}
            </Moment>
          </p>
          <p className="flex">
            <span>
              <CgDanger className="text-red-400 mr-2 w-4 h-4 mt-1" />
            </span>
            {issue.issue}
          </p>
        </div>
        <div className="group/edit invisible group-hover/item:visible">
          <button
            className="bg-zinc-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-lg focus:bg-zinc-700 focus:text-white focus:shadow-lg"
            onClick={() => handleDelete(issue.id)}
          >
            DELETE
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleIssue;
