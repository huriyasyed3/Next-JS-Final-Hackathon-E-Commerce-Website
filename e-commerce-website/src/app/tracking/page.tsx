import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingComponent from "@/components/ui/LoadingAnimation";

// Dynamically import the TrackShipment component with SSR disabled
const TrackShipment = dynamic(() => import('../TrackShipment/page'), {
  ssr: false,
  loading: () => <LoadingComponent />, // Optional: Show a loading component while the component is being loaded
});

export default function TrackingPage() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <TrackShipment/>
    </Suspense>
  );
}