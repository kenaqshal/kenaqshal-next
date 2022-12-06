import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function SanityCode(props) {
  const { language, code } = props.value;
  return (
    <SyntaxHighlighter language={language} style={dracula} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
}
