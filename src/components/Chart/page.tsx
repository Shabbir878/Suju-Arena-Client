import React, { Suspense } from "react";
import Breadcrumb from "../BreadCrumb/BreadCrumb";
import ChartTwo from "./ChartTwo";
import ChartOne from "./ChartOne";

// Use React.lazy for dynamic import
const ChartThree = React.lazy(() => import("./ChartThree"));

const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        {/* Wrap ChartThree in Suspense to handle loading state */}
        <Suspense fallback={<div>Loading Chart...</div>}>
          <ChartThree />
        </Suspense>
      </div>
    </>
  );
};

export default Chart;
