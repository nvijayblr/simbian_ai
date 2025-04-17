"use client";

import * as react from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideProps } from "lucide-react";

export interface IconProps {
  id: number;
  Icon: react.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>
  >;
  isShaking: boolean;
}

interface AlertCardProps {
  AlertIcon: react.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>
  >;
  icons: IconProps[];
  title: string;
  count: number;
  showAlert?: boolean;
  isSimbian?: boolean;
}

const ICON_SIZE = 32;
const OVERLAP = 10;
const SPACING = ICON_SIZE - OVERLAP;

const AlertCard: React.FC<AlertCardProps> = ({
  AlertIcon,
  title,
  count,
  icons,
  showAlert = false,
  isSimbian = false,
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow w-full max-w-[100%] md:max-w-[380px] transition-all ${
        showAlert ? "bg-red-500/20" : "bg-[#1a2340]"
      }`}
    >
      <div className="flex justify-between">
        <h4
          className={` text-lg font-bold mb-2 flex items-center gap-x-[10px] ${
            showAlert ? "text-red-500" : "text-gray-300"
          }`}
        >
          <AlertIcon />
          {title}
        </h4>
        <p
          className={`text-2xl text-blue-400 font-bold mb-4 ${
            showAlert ? "text-red-500" : "text-blue-400"
          }`}
        >
          <span className={`${isSimbian ? "text-green-300" : ""}`}>
            {count}
          </span>
        </p>
      </div>

      <div
        className={`relative h-8 rounded-lg shadow w-full ${
          showAlert ? "bg-red-200/10" : "bg-[#161f3c]"
        }`}
      >
        <AnimatePresence mode="popLayout">
          {icons
            .slice() // clone to avoid mutating original
            .map(({ id, Icon, isShaking }, index) => {
              const position = index * SPACING;

              return (
                <motion.div
                  key={`icons-${id}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    rotate: isShaking ? [0, -10, 10, -10, 0] : 0,
                    zIndex: index + 1,
                  }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute"
                  style={{ left: `${position}px` }}
                >
                  <div
                    className={`w-8 h-8 bg-white rounded flex items-center justify-center ${
                      showAlert ? "" : "shadow-box"
                    }`}
                  >
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AlertCard;
