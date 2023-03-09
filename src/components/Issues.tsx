import React from "react";
import { IssuesArray } from "../interface/interfaces";
import Moment from "react-moment";
import { BsTrash3Fill, BsHourglassSplit } from "react-icons/bs";
import { FiAlertOctagon } from "react-icons/fi";
import { CgTimelapse } from "react-icons/cg";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import "./styles.css";

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
      {
        children,
        className,
        ...props
      }: { children: string; className?: string },
      forwardedRef: React.Ref<HTMLButtonElement>
    ) => (
      <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
          className={classNames("AccordionTrigger", className)}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );

  const AccordionContent = React.forwardRef(
    (
      {
        children,
        className,
        ...props
      }: { children: string; className?: string },
      forwardedRef: React.Ref<HTMLDivElement>
    ) => (
      <Accordion.Content
        className={classNames("AccordionContent", className)}
        {...props}
        ref={forwardedRef}
      >
        <div className="AccordionContentText">{children}</div>
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
                <thead className="hidden md:table-header-group md:text-black md:border-b-[0.100rem] md:font-medium md:bg-sky-100 md:shadow-md md:shadow-slate-200/60">
                  <tr className=" bg-sky-100 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
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
                    <th scope="col" className="px-3 py-3 font-mono">
                      Actions
                    </th>
                  </tr>
                </thead>
                {issueArray.map((issue) => (
                  <tbody
                    className=" hover:bg-zinc-100  cursor-pointer"
                    key={issue.id}
                  >
                    <tr className="border-b border-slate-500/40 flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                      <td className="whitespace-nowrap px-2 py-4 font-semibold">
                        {issue.location}
                      </td>
                      <td className="whitespace-nowrap px-2 py-4 text-zinc-600">
                        {issue.login}
                      </td>
                      <td className="whitespace-wrap px-2 py-4 flex justify-center">
                        <Accordion.Root
                          className="AccordionRoot"
                          type="single"
                          defaultValue="item-1"
                          collapsible
                        >
                          <Accordion.Item
                            className="AccordionItem"
                            value="item-1"
                          >
                            <AccordionTrigger>{issue.subject}</AccordionTrigger>
                            <AccordionContent>{issue.issue}</AccordionContent>
                          </Accordion.Item>
                        </Accordion.Root>
                      </td>
                      <td className="whitespace-nowrap px-2 py-4 text-zinc-600">
                        <Moment fromNow className="font-light">
                          {issue.date}
                        </Moment>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 ">
                        <div className="flex gap-x-6 justify-center items-center">
                          {issue.isFixed ? (
                            <CgTimelapse className="text-yellow-400 text-lg  w-6 h-6 md:w-5 md:h-5 " />
                          ) : (
                            <FiAlertOctagon className="text-red-500 text-lg  w-6 h-6 md:w-5 md:h-5 " />
                          )}
                        </div>
                      </td>
                      <td className="whitespace-wrap px-3 py-4">
                        <div className="flex gap-x-6 justify-center items-center">
                          <BsHourglassSplit
                            onClick={() => handleStatus(issue.id)}
                            className="text-yellow-400 text-lg w-6 h-6 md:w-5 md:h-5"
                          />
                          <BsTrash3Fill
                            onClick={() => handleDelete(issue.id)}
                            className="text-red-500 text-lg w-6 h-6 md:w-5 md:h-5"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
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
