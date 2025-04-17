"use client";

import * as react from "react";
import { LucideProps } from "lucide-react";

interface InfoCardProps {
  Icon: react.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>
  >;
  title: string;
  subTitle?: string;
  isSimbian?: boolean;
  showArrow?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({
  Icon,
  title,
  subTitle = "",
  isSimbian = false,
  showArrow = false,
}) => {
  return (
    <div className="relative bg-[#1a2340] p-4 rounded-lg shadow border-[1px] border-[#232f56] max-w-[100%] md:max-w-[400px] flex item-center gap-[10px]">
      {/* Left-pointing arrow */}
      {showArrow && (
        <div className="absolute left-[-108px] top-1/2 transform -translate-y-1/2 flex items-center hidden md:flex">
          <div className="w-0 h-0 border-y-4 border-r-8 border-y-transparent border-r-green-400"></div>
          <div className="h-1 w-[90px] bg-green-400"></div>
          <div className="w-4 h-4 rounded-full bg-green-400 shadow-md"></div>
        </div>
      )}

      <div
        className={`w-12 h-12 rounded flex items-center justify-center ${
          isSimbian ? "bg-white/10" : "bg-red-200/30"
        }`}
      >
        <Icon
          className={`w-5 h-5 ${isSimbian ? "text-green-500" : "text-red-500"}`}
        />
      </div>
      <div className="flex flex-col gap-x-[10px]">
        <h3 className="font-bold text-white mb-1">{title}</h3>
        {subTitle && <div className="text-sm text-white">{subTitle}</div>}
      </div>
    </div>
  );
};

export default InfoCard;
