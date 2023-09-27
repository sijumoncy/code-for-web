import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "./editor.css";

interface EditorProps {
  title: string;
  language: string;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}


function Editor({ title, language, code, setCode }: EditorProps) {

  const [open, setOpen] = useState(true);

  const handleEditorChange = (editor, data, value: string) => {
    setCode(value);
  };

  return (
    <div className={`${open ? 'flex-1' : 'flex-grow-0'}`}>
      <div className="flex justify-between p-2 pl-4 rounded-t-lg bg-black/40 mt-1 gap-5">
        <span>{title}</span>
        <button onClick={() => setOpen(prev => !prev)}>0</button>
      </div>
        <CodeMirror
          onBeforeChange={handleEditorChange}
          value={code}
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: "material",
            inputStyle: "textarea",
            lineNumbers: true,
          }}
        />
    </div>
  );
}

export default Editor;
