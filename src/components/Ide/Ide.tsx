import React, { useState } from "react";
import Editor from "../Editor/Editor";
import { useGenerateSrcDoc } from "../../hooks/useGenerateSrcDoc";

function Ide() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");

  const srcDoc = useGenerateSrcDoc(
    {html, css, javascript}, 
    250
  )

  return (
    <div className="w-screen h-screen">
      <div className="h-[50vh] flex bg-black/10 gap-2">
      <Editor language="xml" title="HTML" code={html} setCode={setHtml} />
      <Editor language="css" title="CSS" code={css} setCode={setCss} />
      <Editor
        language="javascript"
        title="JS"
        code={javascript}
        setCode={setJavascript}
      />
      </div>
      <div className="h-[50vh] flex">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default Ide;
