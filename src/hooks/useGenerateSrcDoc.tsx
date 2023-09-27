import { useState, useEffect } from "react";

type dataProps = {
  html: string;
  css: string;
  javascript: string;
};

export const useGenerateSrcDoc = (
  { html, javascript, css }: dataProps,
  milliSeconds: number
) => {
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setSrcDoc(
        `<html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${javascript}</script>
         </html>`
      );
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [html, css, javascript, milliSeconds]);

  return srcDoc;
};
