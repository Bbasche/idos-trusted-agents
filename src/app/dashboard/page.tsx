"use client";

import { useAppStore } from "@/lib/store";
import ServiceCatalog from "@/components/dashboard/ServiceCatalog";
import ActivityLog from "@/components/dashboard/ActivityLog";
import Credentials from "@/components/dashboard/Credentials";
import Delegation from "@/components/dashboard/Delegation";
import AddService from "@/components/dashboard/AddService";
import Terminal from "@/components/dashboard/Terminal";

export default function DashboardPage() {
  const currentScreen = useAppStore((s) => s.currentScreen);

  return (
    <>
      {currentScreen === "catalog" && <ServiceCatalog />}
      {currentScreen === "activity" && <ActivityLog />}
      {currentScreen === "credentials" && <Credentials />}
      {currentScreen === "delegation" && <Delegation />}
      {currentScreen === "add-service" && <AddService />}
      {currentScreen === "terminal" && <Terminal />}
    </>
  );
}
