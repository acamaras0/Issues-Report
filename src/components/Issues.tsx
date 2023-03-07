import { IssuesArray } from "../interface/interfaces";
import Moment from "react-moment";
import { BsTrash3Fill, BsHourglassSplit } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";

interface Props {
  issueArray: IssuesArray[];
  setIssueArray: React.Dispatch<React.SetStateAction<IssuesArray[]>>;
}

const Issues = ({ issueArray, setIssueArray }: Props) => {
  const handleDelete = (id: number) => {
    setIssueArray(issueArray.filter((issue) => issue.id !== id));
  };

  const handleStatus = (id: number) => {
    setIssueArray(
      issueArray.map((issue) =>
        issue.id === id ? { ...issue, isFixed: !issue.isFixed } : issue
      )
    );
  };

  return (
    <div className="flex flex-col bg-zinc-50">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            {issueArray.length > 0 ? (
              <table className="min-w-full text-center text-sm">
                <thead className="text-blue-400 border-b-[0.100rem] font-medium dark:border-red-400">
                  <tr>
                    <th scope="col" className="flex px-3 py-4">
                      MAC
                    </th>
                    <th scope="col" className="px-3 py-4">
                      Student
                    </th>
                    <th scope="col" className="px-3 py-4">
                      Issue
                    </th>
                    <th scope="col" className="px-3 py-4">
                      Posted
                    </th>
                    <th scope="col" className="px-3 py-4">
                      Status
                    </th>
                  </tr>
                </thead>
                {issueArray.map((issue) => (
                  <tbody className="group/item hover:bg-zinc-100  cursor-pointer">
                    <tr className="border-b dark:border-yellow-400">
                      <td className="whitespace-nowrap flex items-center px-2 py-4 font-medium">
                        <HiOutlineDesktopComputer className="mt-1 mr-1 text-blue-400" />{" "}
                        {issue.location}
                      </td>
                      <td className="whitespace-nowrap px-2 py-4 text-zinc-600">
                        {issue.login}
                      </td>
                      <td className="whitespace-wrap px-2 py-4">
                        {issue.issue}
                      </td>
                      <td className="whitespace-nowrap px-2 py-4 text-zinc-600">
                        <Moment fromNow>{issue.date}</Moment>
                      </td>
                      <td
                        className={
                          issue.isFixed
                            ? "whitespace-wrap px-3 py-4 text-yellow-500"
                            : "whitespace-wrap px-3 py-4 text-red-600"
                        }
                      >
                        {issue.isFixed ? "In Progress" : "Not Fixed"}
                      </td>
                      <td className="whitespace-wrap px-1 py-4">
                        <BsHourglassSplit
                          onClick={() => handleStatus(issue.id)}
                          className="text-yellow-400 text-lg group/edit invisible group-hover/item:visible"
                        />
                      </td>
                      <td className="whitespace-wrap px-1 py-4">
                        <BsTrash3Fill
                          onClick={() => handleDelete(issue.id)}
                          className="text-red-400 text-lg group/edit invisible group-hover/item:visible"
                        />
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            ) : (
              <p>No issues.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issues;
