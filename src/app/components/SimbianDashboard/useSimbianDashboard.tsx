import { useState, useEffect } from "react";
import {
  Shield,
  Settings,
  Bell,
  AlertTriangle,
  Eye,
  Server,
  Cpu,
  Activity,
  Database,
  FileWarning,
  Terminal,
  Bug,
  CircleCheck,
  CircleUser,
  ChartNetwork,
} from "lucide-react";
import { IconProps } from "../AlertCard/AlertCard";

export const iconList: IconProps[] = [
  Shield,
  Settings,
  Bell,
  AlertTriangle,
  Eye,
  Server,
  Cpu,
  Activity,
].map((Icon, i) => ({ id: i, Icon, isShaking: false }));

export const activeThreadsIcons: IconProps[] = [
  Database,
  FileWarning,
  Terminal,
  Bug,
].map((Icon, i) => ({ id: i, Icon, isShaking: false }));

export const InfoCardsList = [
  {
    title: "Triaged & Reported",
    subTitle: "SOC Agent handled investigation and reporting",
    Icon: CircleCheck,
    showArrow: true,
  },
  {
    title: "Automated Response",
    subTitle: "Incident automatically contained",
    Icon: CircleUser,
    showArrow: false,
  },
  {
    title: "Comprehensive Analysis",
    subTitle: "AI recognized patterns",
    Icon: ChartNetwork,
    showArrow: false,
  },
  {
    title: "Accurate Detection",
    subTitle: "Zero false positives",
    Icon: ChartNetwork,
    showArrow: false,
  },
  {
    title: "24/7 Coverage",
    subTitle: "No analyst fatigue",
    Icon: ChartNetwork,
    showArrow: false,
  },
];

export function useSimbianDashboard() {
  const [ignoreAlerts, setIgnoreAlerts] = useState<IconProps[]>(iconList);
  const [wronglyClosed, setWronglyClosed] = useState<IconProps[]>(iconList);
  const [activeThreads, setActiveThreads] =
    useState<IconProps[]>(activeThreadsIcons);

  useEffect(() => {
    const interval = setInterval(() => {
      // Removes the rightmost icon
      setIgnoreAlerts((prev) =>
        prev.map((icon, i) => {
          return i === ignoreAlerts.length - 1
            ? { ...icon, isShaking: true }
            : icon;
        })
      );
      setWronglyClosed((prev) =>
        prev.map((icon, i) => {
          return i === wronglyClosed.length - 1
            ? { ...icon, isShaking: true }
            : icon;
        })
      );
      setActiveThreads((prev) =>
        prev.map((icon, i) => {
          return i === activeThreads.length - 1
            ? { ...icon, isShaking: true }
            : icon;
        })
      );
      setIgnoreAlerts((prevIcons) =>
        prevIcons.slice(0, ignoreAlerts.length - 1)
      );
      setWronglyClosed((prevIcons) =>
        prevIcons.slice(0, wronglyClosed.length - 1)
      );
      setActiveThreads((prevIcons) =>
        prevIcons.slice(0, activeThreads.length - 1)
      );
    }, 250);

    return () => clearInterval(interval);
  }, [ignoreAlerts, wronglyClosed, activeThreads]);

  return {
    ignoreAlerts,
    wronglyClosed,
    activeThreads,
  };
}
