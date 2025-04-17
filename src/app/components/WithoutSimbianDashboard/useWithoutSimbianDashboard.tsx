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
  CircleX,
  Info,
  Monitor,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { IconProps } from "../AlertCard/AlertCard";

export const ignoreAlertsIconList: IconProps[] = [
  Shield,
  Settings,
  Bell,
  AlertTriangle,
  Eye,
  Server,
  Cpu,
  Activity,
].map((Icon, i) => ({ id: i, Icon, isShaking: false }));

export const iconList: IconProps[] = [
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
].map((Icon, i) => ({ id: i, Icon, isShaking: false }));

export const InfoCardsList = [
  {
    title: "Wasting valuable analyst time on false positives",
    Icon: CircleX,
  },
  {
    title: "Processing one alert at a time, missing the big picture",
    Icon: Monitor,
  },
  {
    title: "More time fixing SOAR automation, less time on real threats",
    Icon: Info,
  },
];

export function useWithoutSimbianDashboard() {
  const router = useRouter();

  const [ignoreAlerts] = useState<IconProps[]>(ignoreAlertsIconList);
  const [wronglyClosed, setWronglyClosed] = useState<IconProps[]>(iconList);
  const [activeThreads, setActiveThreads] = useState<IconProps[]>([]);
  const [showWithSimbian, setShowWithSimbian] = useState(false);

  useEffect(() => {
    if (wronglyClosed.length === 0 || showWithSimbian) return;

    const interval = setInterval(() => {
      const moveIconIndex = wronglyClosed.length - 1;
      const iconToMove: IconProps = wronglyClosed[moveIconIndex];

      // Step 1: Trigger shake on rightmost icon
      setWronglyClosed((prev) =>
        prev.map((icon, i) => {
          return i === wronglyClosed.length - 1
            ? { ...icon, isShaking: true }
            : icon;
        })
      );

      // Step 2: Move after shake
      setTimeout(() => {
        setWronglyClosed((prevIcons) => prevIcons.slice(0, moveIconIndex));
        setActiveThreads((prevIcons) => [
          ...prevIcons,
          { ...iconToMove, isShaking: true },
        ]);
      }, 500);
    }, 1000);

    if (activeThreads.length > 4) {
      setShowWithSimbian(true);
    }

    return () => clearInterval(interval);
  }, [wronglyClosed, activeThreads, showWithSimbian]);

  useEffect(() => {
    if (showWithSimbian) {
      setTimeout(() => {
        router.push("/WithSimbian");
      }, 500);
    }
  }, [showWithSimbian, router]);

  return {
    showWithSimbian,
    ignoreAlerts,
    wronglyClosed,
    activeThreads,
  };
}
