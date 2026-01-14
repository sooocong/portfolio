import { DataProps } from "@/types";

const ResumeTitle = ({ resumeTitle }: Pick<DataProps, "resumeTitle">) => {
  return (
    <div className="dotted-bg h-2 sticky top-0 md:static md:h-20 flex justify-center items-center">
      <span className="text-3xl hidden md:block font-semibold text-white">{resumeTitle.title}</span>
    </div>
  );
};

export default ResumeTitle;
