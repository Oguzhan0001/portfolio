import type { Metadata } from "next";
import MeridianPage from "./MeridianPage";

export const metadata: Metadata = {
  title: "Meridian Coffee — Project by Emre Aydın",
};

export default function Page() {
  return <MeridianPage />;
}
