import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PreviewProps {
  markdown: string;
}

const Preview = ({ markdown }: PreviewProps) => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div
        className="w-full h-[42px]
          bg-palette-200 dark:bg-palette-900 text-palette-500 pt-[8px] pl-[16px]"
      >
        <div className="w-[71px] h-[16px] flex flex-row justify-between">
          {Array.from("PREVIEW").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      </div>
      {/* Markdown Preview */}
      <div
        className="flex flex-col  h-[calc(100vh-114px)] gap-[20px] overflow-auto py-[22px] px-[20px] bg-white dark:bg-palette-800 
          text-palette-500 dark:text-white text-[14px] leading-[24px]"
      >
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm]}
          components={{
            h1: (props) => (
              <h1
                className="text-[32px] text-palette-700 font-bold"
                {...props}
              />
            ),
            h2: (props) => (
              <h1
                className="text-[28px] text-palette-700 font-bold"
                {...props}
              />
            ),
            h3: (props) => (
              <h1
                className="text-[24px] text-palette-700 font-bold"
                {...props}
              />
            ),
            h4: (props) => (
              <h1
                className="text-[20px] text-palette-700 font-bold"
                {...props}
              />
            ),
            h5: (props) => (
              <h1
                className="text-[16px] text-palette-700 font-bold"
                {...props}
              />
            ),
            h6: (props) => (
              <h1 className="text-[14px] font-bold text-orange" {...props} />
            ),
            ul: ({ children }) => (
              <ul className="pl-6 list-disc list-inside marker:text-orange">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="pl-6 list-decimal list-inside marker:text-orange">
                {children}
              </ol>
            ),
            blockquote: ({ children }) => (
              <blockquote
                className="py-[22px] px-[28px] font-bold text-palette-700 border-l-[4px] 
                rounded-[4px] border-orange bg-palette-200"
              >
                {children}
              </blockquote>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {children}
              </a>
            ),
            code: ({ inline, children }) =>
              inline ? (
                <code className="text-palette-700">{children}</code>
              ) : (
                <pre className="bg-palette-200 text-palette-700 p-6 rounded-[4px]">
                  <code>{children}</code>
                </pre>
              ),
          }}
        />
      </div>
    </div>
  );
};

export default Preview;
