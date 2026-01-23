import Image from "next/image";

import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      {/* 상단: 사진 + 기본 정보 */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        {/* 프로필 이미지 */}
        <Image
          src="/profile.jpg"
          alt="프로필 사진"
          width={150}
          height={150}
          className="rounded-full object-cover border-2"
          priority
        />

        {/* 텍스트 영역 */}
        <div className="flex flex-col gap-2">
          <h1 className="leading-[1.15]">
            안녕하세요,
            <br />
            프론트엔드 개발자 <span className="text-PRIMARY font-semibold">{information.name}</span>
            입니다.
          </h1>

          {/* 연락처 */}
          <div className="flex gap-2 flex-wrap">
            {information.contact.map((contact) => (
              <ContactItem
                key={contact.id}
                className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
                {...contact}
              >
                {contact.name}
              </ContactItem>
            ))}
          </div>
        </div>
      </div>

      {/* 자기소개 */}
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
