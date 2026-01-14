import GithubIcon from "@/assets/images/github.svg";
import WebIcon from "@/assets/images/web.svg";

type LinksProps = {
  repoUrl?: string;
  webUrl?: string;
};

const Links = ({ repoUrl, webUrl }: LinksProps) => {
  if (!repoUrl && !webUrl) return null; // 둘 다 없으면 링크 영역 자체 제거

  return (
    <div className="flex gap-1">
      {repoUrl && (
        <a target="_blank" rel="noreferrer" href={repoUrl} className="w-fit">
          <GithubIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
        </a>
      )}

      {webUrl && (
        <a target="_blank" rel="noreferrer" href={webUrl} className="w-fit">
          <WebIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
        </a>
      )}
    </div>
  );
};

export default Links;
