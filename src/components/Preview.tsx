import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FileContext } from "../context/FilesContext";
import { MutableRefObject, useContext } from "react";

const Preview = ({
  previewRef,
}: {
  previewRef: MutableRefObject<HTMLDivElement | null>;
}) => {
  const { markdown } = useContext(FileContext);

  return (
    <div
      ref={previewRef}
      className="
        flex flex-col
        w-full
        overflow-auto
        h-[calc(100vh-114px)]
        gap-[20px] font-slab
        py-[22px] px-[8px] lg:px-[20px]
        break-words
        bg-white dark:bg-palette-1000 
        text-palette-500 dark:text-white
        text-[14px] leading-8

      "
    >
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => (
            <h1
              className="text-[32px] text-palette-700 font-bold dark:text-palette-100"
              {...props}
            />
          ),
          h2: (props) => (
            <h2
              className="text-[28px] text-palette-700 font-bold dark:text-palette-100"
              {...props}
            />
          ),
          h3: (props) => (
            <h3
              className="text-[24px] text-palette-700 font-bold dark:text-palette-100"
              {...props}
            />
          ),
          h4: (props) => (
            <h4
              className="text-[20px] text-palette-700 font-bold dark:text-palette-100"
              {...props}
            />
          ),
          h5: (props) => (
            <h5
              className="text-[16px] text-palette-700 font-bold dark:text-palette-100"
              {...props}
            />
          ),
          h6: (props) => (
            <h6 className="text-[14px] font-bold text-orange" {...props} />
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
              className="
                py-[22px] px-[28px] font-bold text-palette-700 border-l-[4px] 
                rounded-[4px] border-orange bg-palette-200 
                dark:bg-palette-800 dark:text-palette-100
              "
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
          code: ({ children }) => (
            <code
              className="
                text-palette-700 
                dark:text-palette-100
                bg-palette-200 
                dark:bg-palette-800
                break-words
                p-1
              "
            >
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre
              className="break-words
                bg-palette-200 text-palette-700 p-2 lg:p-8 rounded-[4px] 
                dark:text-palette-100 dark:bg-palette-800
              "
            >
              {children}
            </pre>
          ),

          hr: (props) => <hr className="my-4 border-palette-300" {...props} />,

          table: ({ children, ...props }) => (
            <table
              className="w-full border-collapse border border-palette-300"
              {...props}
            >
              {children}
            </table>
          ),
          thead: ({ children, ...props }) => (
            <thead
              className="
                bg-palette-200 
                border-b border-palette-300
              "
              {...props}
            >
              {children}
            </thead>
          ),
          tbody: ({ children, ...props }) => (
            <tbody {...props}>{children}</tbody>
          ),
          tr: ({ children, ...props }) => (
            <tr className="border-b border-palette-300" {...props}>
              {children}
            </tr>
          ),
          th: ({ children, ...props }) => (
            <th
              className="
                py-2 px-4 text-left font-bold border border-palette-300 
                text-palette-700
              "
              {...props}
            >
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td
              className="
                py-2 px-4 border border-palette-300 
                text-palette-500
              "
              {...props}
            >
              {children}
            </td>
          ),

          strong: ({ children, ...props }) => (
            <strong className="font-bold text-palette-700" {...props}>
              {children}
            </strong>
          ),
          em: ({ children, ...props }) => (
            <em className="italic text-palette-700" {...props}>
              {children}
            </em>
          ),
        }}
      />
    </div>
  );
};

export default Preview;
