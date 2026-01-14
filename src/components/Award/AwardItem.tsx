import { AwardProps } from "@/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const AwardItem = ({ name, date, organizer, description }: AwardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h4>{name}</h4>
          <span>{date}</span>
        </div>
        <span>{organizer}</span>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ node, ...props }) => (
              <a
                {...props}
                target="_blank"
                rel="noreferrer"
                className="text-PRIMARY underline underline-offset-2 font-medium"
              />
            ),
          }}
        >
          {description}
        </ReactMarkdown>{" "}
      </div>
    </div>
  );
};

export default AwardItem;
