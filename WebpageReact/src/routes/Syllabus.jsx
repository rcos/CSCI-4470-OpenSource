import React, { useEffect, useState } from "react";
import syllabus from "../../../Modules/01.Introduction/Syllabus/Syllabus.md";


const Syllabus = () => {
  const [post, setPost] = useState("");
  useEffect(() => {
      fetch(syllabus)
        .then((res) => res.text())
        .then((response) => setPost(response))
        .catch((err) => setPost(err));
    });

  return (
    <div className="container">
      <Markdown>{post}</Markdown>
    </div>
  );
};

export default Syllabus;