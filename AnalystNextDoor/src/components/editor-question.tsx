// components/CodeEditor.tsx

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-github'; 
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-sql';
import { useTheme } from 'next-themes';


const CodeEditor: React.FC<{value: string}> = ({ value}) => {
  const { resolvedTheme, setTheme } = useTheme();
  var editorTheme = "monkai"
  if (resolvedTheme === "light") {  
    editorTheme = "xcode"  
  }
  else {
    editorTheme = "twilight"
  }
  
  return (
    <AceEditor
    mode="sql"
    theme={editorTheme}
    fontSize={14}
    lineHeight={19}
    showPrintMargin={false}
    showGutter={true}
    highlightActiveLine={true}
    value={value}
    readOnly={true}
    setOptions={{
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: false,
    showLineNumbers: true,
    tabSize: 4,
    }}
    style={{ width: '100%', height: '82dvh', borderRadius: '10px', padding: '10px',flex:1, position:"relative" }}
    />
  );
};

export default CodeEditor;
