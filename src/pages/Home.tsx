import { useState } from "react";
import Form from "../components/Form";
import Issues from "../components/Issues";
import Navbar from "../components/Navbar";
import { IssuesArray } from "../interface/interfaces";

const Home = () => {
  const [login, setLogin] = useState<string>("");
  const [issue, setIssue] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [issueArray, setIssueArray] = useState<IssuesArray[]>([]);
  const [switchPage, setSwitchPage] = useState<boolean>(false);
  const date: string = new Date()
    .toISOString()
    .slice(0, new Date().toISOString().lastIndexOf(":"));

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (issue) {
      setIssueArray([
        ...issueArray,
        {
          id: Date.now(),
          login: login,
          issue: issue,
          location: location,
          date: date,
          isFixed: false,
        },
      ]);
    }
  };
  return (
    <>
      <Navbar setSwitch={setSwitchPage} />
      {switchPage === false ? (
        <Form
          setLogin={setLogin}
          setIssue={setIssue}
          setLocation={setLocation}
          handleAdd={handleAdd}
        />
      ) : (
        <Issues issueArray={issueArray} setIssueArray={setIssueArray} />
      )}
    </>
  );
};

export default Home;
