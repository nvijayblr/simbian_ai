"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BellOff, CircleX, ShieldAlert } from "lucide-react";
import AlertCard from "../AlertCard/AlertCard";
import InfoCard from "../InfoCard/InfoCard";
import ProgressCard from "../ProgressCard/ProgressCard";
import { InfoCardsList, useSimbianDashboard } from "./useSimbianDashboard";

const SimbianDashboard = () => {
  const { ignoreAlerts, wronglyClosed, activeThreads } = useSimbianDashboard();

  return (
    <div className="flex flex-col gap-6 w-full">
      <AnimatePresence mode="popLayout">
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 0,
            zIndex: 1,
          }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <section className="mt-10 pr-24 text-right">
            <h2 className="text-3xl font-bold text-blue-400 mb-2">
              With Simbian
            </h2>
            <p className="text-gray-300 mb-6">
              Relax. Our AI Agents will take it from here.
            </p>
          </section>
        </motion.div>

        {/* Metrics */}
        <div className="m-4 md:m-16 grid grid-cols-1 md:grid-cols-[auto_180px_auto] gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onAnimationComplete={() => {}}
          >
            <div className="space-y-6">
              <AlertCard
                AlertIcon={BellOff}
                title="Ignored Alerts"
                count={ignoreAlerts.length}
                icons={ignoreAlerts}
                isSimbian={true}
              />
              <AlertCard
                AlertIcon={CircleX}
                title="Wrongly Closed"
                count={wronglyClosed.length}
                icons={wronglyClosed}
                isSimbian={true}
              />
              <AlertCard
                AlertIcon={ShieldAlert}
                title="Active Threads"
                count={activeThreads.length}
                icons={activeThreads}
                showAlert={false}
                isSimbian={true}
              />
            </div>
          </motion.div>

          <div className="space-y-6 relative self-start top-[-122px] hidden md:block">
            <ProgressCard />
          </div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 0,
              zIndex: 1,
            }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="space-y-4 mt-0">
              <div className="flex flex-col gap-y-[20px]">
                {InfoCardsList.map((info, index) => {
                  return (
                    <InfoCard
                      key={`info-card-${index}`}
                      Icon={info.Icon}
                      title={info.title}
                      subTitle={info.subTitle}
                      isSimbian={true}
                      showArrow={info.showArrow}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default SimbianDashboard;
