"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Settings, Bell, AlertTriangle, LoaderCircle } from "lucide-react";
import Spinner from "../Spinner/Spinner";

const iconList = [Settings, Bell, AlertTriangle, LoaderCircle, Spinner].map(
  (Icon, i) => ({
    id: i,
    Icon,
    isShaking: false,
  })
);

const ICON_SIZE = 32;
const OVERLAP = 4;
const SPACING = ICON_SIZE + OVERLAP;

const ProgressCard: React.FC = () => {
  return (
    <AnimatePresence mode="popLayout">
      {iconList.map(({ id, Icon }, index) => {
        const position = index * SPACING;

        return (
          <motion.div
            key={`progress-${id}`}
            initial={{ opacity: 0, y: -30, margin: 0, left: 0, right: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 0,
              zIndex: index + 1,
              margin: 0,
              left: 0,
              right: 0,
            }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute"
            style={{ top: `${position}px` }}
          >
            <div
              className={`w-8 h-8 bg-white rounded flex items-center justify-center shadow-box m-auto`}
            >
              <Icon className="w-5 h-5 text-black" />
            </div>
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
};

export default ProgressCard;
