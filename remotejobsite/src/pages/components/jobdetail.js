import { Button } from "@chakra-ui/react";
import App from "next/app";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Apply from "./Apply";

function Jobdetail(props) {
  const markdown = `
# Job Title
    some text here 
Job Description
==================
    some text here
    here is a list of things to do: 
    - [ ] Job Title
Job Requirements
===================
    some text here
    here is a list of things to do:
    - [ ] Job Title
Job Skills
===================
    some text here
    here is a list of things to do:
    - [ ] Job Title
Job Type    
===================
    some text here
    here is a list of things to do:
    - [ ] Job Title
`;

  const openPopOver = () => {
    <Apply></Apply>;
  };
  return (
    <div className="p-6 rounded-lg md:flex-grow scrollbar-thin scrollbar-corner-rounded-xl scrollbar-thumb-slate-400">
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <Apply></Apply>
    </div>
  );
}

export default Jobdetail;
