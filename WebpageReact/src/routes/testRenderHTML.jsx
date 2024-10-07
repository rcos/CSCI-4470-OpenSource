import React, { useEffect, useState }from'react';
import testInput from "../../../Modules/03.DocumentationAndCommunity/Community.html";

function testRenderHTML() {
  let[htmlFileString, setHtmlFileString] = useState();

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(testInput)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);

  return(
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
}

export default testRenderHTML;