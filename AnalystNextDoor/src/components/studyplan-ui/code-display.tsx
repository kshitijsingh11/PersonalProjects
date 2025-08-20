// components/CodeEditor.tsx
"use client"
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-github'; 
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-sql';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';


const CodeDisplay: React.FC<{ value: string}> = ({ value }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [ loader, setLoader] = useState(true);


  useEffect(() => {
    setLoader(true); // Show loader animation

    // After 0.5 seconds, hide the loader
    const timeoutId = setTimeout(() => {
      setLoader(false);
    }, 500);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);


  var editorTheme = "light"
  if (resolvedTheme === "light") {  
    editorTheme = "xcode"  
  }
  else {
    editorTheme = "twilight"
  }
  
  return (
    <>
    {loader ? ( <div className="animate-pulse bg-neutral-200 rounded-lg dark:bg-neutral-900 w-full h-32"></div>):(

      <AceEditor
      mode="sql"
      
      maxLines={20}
      theme={editorTheme}
      fontSize={14}
      lineHeight={19}
      showPrintMargin={false}
      showGutter={false}
      wrapEnabled={false}
      highlightActiveLine={false}
      value={value}
      readOnly={true}
      width='100%'
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 4,
      }}
      style={{zIndex:20,padding:'10px',
    }}
    />
  )}
  </>
  );
};

export default CodeDisplay;
