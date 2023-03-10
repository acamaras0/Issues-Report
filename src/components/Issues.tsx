import { IssuesProps } from "../interface/interfaces";
import SingleIssue from "./SingleIssue";
import "./styles.css";

const Issues = ({ issueArray, setIssueArray }: IssuesProps) => {
  return (
    <div className="flex flex-col bg-zinc-50">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            {issueArray.length > 0 ? (
              <table className="min-w-full text-center text-sm font-mono">
                <thead className="hidden md:table-header-group md:text-black md:border-b-[0.100rem] md:font-medium md:bg-sky-100 md:shadow-md md:shadow-slate-200/60">
                  <tr className=" bg-yellow-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                    <th scope="col" className="px-3 py-3 font-mono">
                      MAC
                    </th>
                    <th scope="col" className="px-3 py-3 font-mono">
                      Student
                    </th>
                    <th scope="col" className="px-3 py-3 font-mono">
                      Issue
                    </th>
                    <th scope="col" className="px-3 py-3 font-mono">
                      Description
                    </th>
                    <th scope="col" className="px-3 py-3 font-mono">
                      Posted
                    </th>
                    <th scope="col" className="px-3 py-3 font-mono">
                      Status
                    </th>
                    <th scope="col" className="px-3 py-3 font-mono">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className=" hover:bg-zinc-100  cursor-pointer">
                  <SingleIssue
                    issueArray={issueArray}
                    setIssueArray={setIssueArray}
                  />
                </tbody>
              </table>
            ) : (
              <p className="text-center">No issues. ツ</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issues;
