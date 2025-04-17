"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BellOff, CircleX, ShieldAlert } from "lucide-react";
import AlertCard from "../AlertCard/AlertCard";
import InfoCard from "../InfoCard/InfoCard";
import {
  InfoCardsList,
  useWithoutSimbianDashboard,
} from "./useWithoutSimbianDashboard";

const WithoutSimbianDashboard = () => {
  const { showWithSimbian, ignoreAlerts, wronglyClosed, activeThreads } =
    useWithoutSimbianDashboard();

  return (
    <div className="flex flex-col gap-6 w-full">
      <AnimatePresence mode="popLayout">
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={
            showWithSimbian
              ? {
                  opacity: 0,
                  zIndex: 1,
                  y: -50,
                }
              : {
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  zIndex: 1,
                }
          }
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <section className="mt-16 pr-24 text-right">
            <h2 className="text-3xl font-bold text-blue-400 mb-2">
              Without Simbian
            </h2>
            <p className="text-gray-300 mb-6">
              If this sounds all too familiar, you might want to...
            </p>
          </section>
        </motion.div>

        {/* Left Cards */}
        <div className="m-4 md:m-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              showWithSimbian
                ? {
                    opacity: 0,
                    rotate: 0,
                    zIndex: 1,
                    x: 0,
                  }
                : {
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                    zIndex: 1,
                  }
            }
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="space-y-4 mt-24">
              <div className="flex flex-col gap-y-[20px]">
                {InfoCardsList.map((info, index) => {
                  return (
                    <InfoCard
                      key={`info-card-${index}`}
                      Icon={info.Icon}
                      title={info.title}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={
              showWithSimbian
                ? { opacity: 0, x: 0 }
                : {
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                    zIndex: 1,
                  }
            }
            exit={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onAnimationComplete={() => {}}
          >
            <div className="space-y-6">
              <AlertCard
                AlertIcon={BellOff}
                title="Ignored Alerts"
                count={220 + ignoreAlerts.length}
                icons={ignoreAlerts}
              />
              <AlertCard
                AlertIcon={CircleX}
                title="Wrongly Closed"
                count={180 + wronglyClosed.length}
                icons={wronglyClosed}
              />
              <AlertCard
                AlertIcon={ShieldAlert}
                title="Active Threads"
                count={activeThreads.length}
                icons={activeThreads}
                showAlert={activeThreads.length >= 3}
              />
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default WithoutSimbianDashboard;
