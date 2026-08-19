import type { Metadata } from "next";
import AtlasPage from "./AtlasPage";

export const metadata: Metadata = {
  title: "Atlas Logistics — Project by Emre Aydın",
};

export default function Page() {
  return <AtlasPage />;
}
