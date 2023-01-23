import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
Job Experience
===================
    some text here
    here is a list of things to do:
    - [ ] Job Title
Job Education
===================
    some text here
    here is a list of things to do:
    - [ ] Job Title
Job Industry
===================
    some text here
    here is a list of things to do:
    - [ ] Job Title
Job Function
===================
    some text here
    here is a list of things to do:
    - [ ] Job Title
Job Level
===================
    some text here
    here is a list of things to do:
    - [ ] Job Title
Job Company
===================
    some text here
    here is a list of things to do:
    - [ ] Job Title
Job Company Size
===================

        - some text here
        - here is a list of things to do:
        - [ ] Job Title


Job Company Type
===================

    some text here
    here is a list of things to do:
    - [ ] Job Title


Job Company Industry
===================

    some text here
    here is a list of things to do:
    - [ ] Job Title
Job Company Revenue
===================
    some text here
    here is a list of things to do:
    - [ ] Job Title
job Benefits
===================
Job Location
===================
Job Salary
===================

- [ ] Job Title

<blockquote>
    some text here
</blockquote>


`;
  return (
    <div className="fixed my-auto bg-white p-3 rounded-lg right-10 top-1/4 left-96 bottom-2 scrollbar-thin  scrollbar-corner-rounded-xl scrollbar-thumb-slate-400">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default Jobdetail;
