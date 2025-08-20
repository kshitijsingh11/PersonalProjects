// components/CodeEditor.tsx

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-github'; 
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/mode-sql';


const CodeEditor: React.FC<{ theme: string, value: string; onChange: (value: string) => void }> = ({ value, onChange, theme }) => {
  var editorTheme = "monkai"
  if (theme === "light") {  
    editorTheme = "xcode"  
  }
  else {
    editorTheme = "twilight"
  }
  
  return (
    <AceEditor
    placeholder="Placeholder Text"
    mode="sql"
    theme={editorTheme}
    fontSize={14}
    lineHeight={19}
    showPrintMargin={false}
    showGutter={true}
    highlightActiveLine={true}
    value={value}
    onChange={onChange}
    setOptions={{
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: false,
    showLineNumbers: true,
    tabSize: 4,
    }}
    style={{ width: '100%', height: '100%', borderRadius: '10px', padding: '10px', flex: 1, position:"relative" }}
    />
  );
};

export default CodeEditor;
