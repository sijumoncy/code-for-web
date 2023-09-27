import React, { useEffect, useState } from "react";
import Editor from "../Editor/Editor";

function Ide() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  const [srcDoc, setSrcDoc] = useState("");


  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, javascript]);

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
        {/* <div className={`${open === 'xml' ? "flex-grow-0" : "flex-1"}`}>
          <Editor language="xml" title="HTML" code={html} setCode={setHtml} setOpen={setOpen}/>
        </div>
        <div className={`${open === 'css' ? "flex-grow-0" : "flex-1"}`}>
          <Editor language="css" title="CSS" code={css} setCode={setCss} setOpen={setOpen}/>
        </div>
        <div className={`${open === 'javascript' ? "flex-grow-0" : "flex-1"}`}>
          <Editor
            language="javascript"
            title="JS"
            code={javascript}
            setCode={setJavascript}
            setOpen={setOpen}
          />
        </div> */}
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
