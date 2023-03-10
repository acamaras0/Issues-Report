import React from "react";
import { IssuesProps } from "../interface/interfaces";
import Moment from "react-moment";
import { BsTrash3Fill, BsHourglassSplit } from "react-icons/bs";
import { FiAlertOctagon } from "react-icons/fi";
import { CgTimelapse } from "react-icons/cg";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

const SingleIssue = ({ issueArray, setIssueArray }: IssuesProps) => {
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

  issueArray.sort((a, b) => {
    return b.id - a.id;
  });

  return (
    <>
      {issueArray.map((issue) => (
        <tr className="border-b border-slate-500/40 flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td className="whitespace-nowrap px-4 py-4 font-semibold">
            {issue.location}
          </td>
          <td className="whitespace-nowrap px-4 py-4 text-zinc-600">
            {issue.login}
          </td>
          <td className="whitespace-nowrap px-4 py-4 text-zinc-600">
            {issue.subject}
          </td>
          <td className="whitespace-wrap px-4 py-4 flex justify-center">
            <Accordion.Root
              className="AccordionRoot"
              type="single"
              defaultValue="item-1"
              collapsible
            >
              <Accordion.Item className="AccordionItem" value="item-1">
                <AccordionTrigger>
                  {issue.issue.substring(0, 35) + "..."}
                </AccordionTrigger>
                <AccordionContent>{issue.issue}</AccordionContent>
              </Accordion.Item>
            </Accordion.Root>
          </td>
          <td className="whitespace-nowrap px-4 py-4 text-zinc-600">
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
                className="text-yellow-400 text-lg w-6 h-6 md:w-5 md:h-5 hover:scale-110 ease-linear duration-200"
              />
              <BsTrash3Fill
                onClick={() => handleDelete(issue.id)}
                className="text-red-500 text-lg w-6 h-6 md:w-5 md:h-5 hover:scale-110 ease-linear duration-200"
              />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default SingleIssue;
