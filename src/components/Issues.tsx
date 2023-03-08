import React from "react";
import { IssuesArray } from "../interface/interfaces";
import Moment from "react-moment";
import { BsTrash3Fill, BsHourglassSplit } from "react-icons/bs";
import { FiAlertOctagon } from "react-icons/fi";
import { CgTimelapse } from "react-icons/cg";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

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

  const AccordionTrigger = React.forwardRef(
    (
      { children, ...props }: { children: string },
      forwardedRef: React.Ref<HTMLButtonElement>
    ) => (
      <Accordion.Header>
        <Accordion.Trigger
          {...props}
          ref={forwardedRef}
          className="inline-flex"
        >
          {children}
          {children.length > 30 ? (
            <ChevronDownIcon
              className="bg-yellow-400 font-medium ml-2 h-3 w-3 mt-1 mr-2"
              aria-hidden
            />
          ) : (
            ""
          )}
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );

  const AccordionContent = React.forwardRef(
    (
      { children, ...props }: { children: string },
      forwardedRef: React.Ref<HTMLDivElement>
    ) => (
      <Accordion.Content {...props} ref={forwardedRef}>
        <div>{children}</div>
      </Accordion.Content>
    )
  );

  return (
    <div className="flex flex-col bg-zinc-50">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            {issueArray.length > 0 ? (
              <table className="min-w-full text-center text-sm font-mono">
                <thead className="text-black border-b-[0.100rem] font-medium bg-sky-100 shadow-md shadow-slate-200/60">
                  <tr>
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
                      Posted
                    </th>
                    <th scope="col" className="px-3 py-3 font-mono">
                      Status
                    </th>
                    <th></th>
                  </tr>
                </thead>
                {issueArray.map((issue) => (
                  <tbody
                    className="group/item hover:bg-zinc-100  cursor-pointer"
                    key={issue.id}
                  >
                    <tr className="border-b border-slate-500/40">
                      <td className="whitespace-nowrap px-2 py-4 font-semibold">
                        {issue.location}
                      </td>
                      <td className="whitespace-nowrap px-2 py-4 text-zinc-600">
                        {issue.login}
                      </td>
                      <td className="max-w-lg whitespace-wrap px-8 py-4">
                        <Accordion.Root
                          type="single"
                          defaultValue="item-1"
                          collapsible
                        >
                          <Accordion.Item value="item-1">
                            <AccordionTrigger>
                              {issue.issue.substring(0, 60)}
                            </AccordionTrigger>
                            {issue.issue.length > 30 ? (
                              <AccordionContent>{issue.issue}</AccordionContent>
                            ) : (
                              ""
                            )}
                          </Accordion.Item>
                        </Accordion.Root>
                      </td>
                      <td className="whitespace-nowrap px-2 py-4 text-zinc-600">
                        <Moment fromNow className="font-light">
                          {issue.date}
                        </Moment>
                      </td>
                      <td
                        className={
                          issue.isFixed
                            ? "whitespace-wrap px-3 py-4 text-yellow-500 w-5 h-5"
                            : "whitespace-wrap px-3 py-4 text-red-600 w-5 h-5"
                        }
                      >
                        {issue.isFixed ? (
                          <CgTimelapse className="text-yellow-400 text-lg ml-4 w-5 h-5" />
                        ) : (
                          <FiAlertOctagon className="text-red-400 text-lg ml-4  w-5 h-5" />
                        )}
                      </td>
                      <td className="whitespace-wrap px-3 py-4 ">
                        <div className="flex gap-x-4">
                          <BsHourglassSplit
                            onClick={() => handleStatus(issue.id)}
                            className="text-yellow-400 text-lg group/edit invisible group-hover/item:visible"
                          />
                          <BsTrash3Fill
                            onClick={() => handleDelete(issue.id)}
                            className="text-red-400 text-lg group/edit invisible group-hover/item:visible"
                          />
                        </div>
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
