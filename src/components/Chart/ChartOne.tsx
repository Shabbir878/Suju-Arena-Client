import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useGetAllBookingQuery } from "@/redux/api/bookingApi/bookingApi"; // Adjust the import path if necessary

const baseOptions: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "smooth",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    fillOpacity: 1,
    hover: {
      sizeOffset: 5,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
  },
};

const ChartOne: React.FC = () => {
  const { data: bookings, isLoading } = useGetAllBookingQuery(undefined); // Fetch booking data

  // Check if loading or no bookings
  if (isLoading || !bookings?.data) {
    return <div>Loading...</div>; // Handle loading state
  }

  // Transform booking data for the chart
  const facilities = [
    ...new Set(
      bookings.data.map(
        (item: { facility: { name: string } }) => item.facility.name
      )
    ),
  ]; // Unique facility names

  // Create series data with explicit typing
  const seriesData: ApexAxisChartSeries = facilities.map((facility) => {
    return {
      name: facility as string, // Cast name to string
      data: bookings.data
        .filter(
          (item: { facility: { name: string }; payableAmount: number }) =>
            item.facility.name === facility
        )
        .map((item: { payableAmount: number }) => item.payableAmount), // Get the booking prices for each facility
    };
  });

  // Create a new options object for the chart
  const chartOptions: ApexOptions = {
    ...baseOptions,
    xaxis: {
      categories: facilities, // Set categories dynamically
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Total Revenue</p>
              <p className="text-sm font-medium">01.10.2024 - 07.10.2024</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Total Booking</p>
              <p className="text-sm font-medium">01.10.2024 - 07.10.2024</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={chartOptions} // Use the new options object
            series={seriesData} // Use the transformed series data
            type="area"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
