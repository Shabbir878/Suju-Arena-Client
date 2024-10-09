/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllBookingQuery } from "@/redux/api/bookingApi/bookingApi";
import { useGetFacilityQuery } from "@/redux/api/facilitesApi/facilitesApi";
import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

// Define the options for the chart
const createChartOptions = (categories: string[]): ApexOptions => ({
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: categories,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",
  },
  fill: {
    opacity: 1,
  },
});

const ChartTwo: React.FC = () => {
  // Fetch facilities and bookings data
  const {
    data: facilitiesResponse,
    isLoading: loadingFacilities,
    error: facilityError,
  } = useGetFacilityQuery(undefined);

  const {
    data: bookingsResponse, // Rename to more descriptive name
    isLoading: loadingBookings,
    error: bookingError,
  } = useGetAllBookingQuery(undefined);

  // Check if data is still loading
  if (loadingFacilities || loadingBookings) {
    return <div>Loading...</div>;
  }

  // Handle errors if fetching fails
  const getErrorMessage = (error: any): string => {
    if (error && typeof error === "object") {
      return error.error || "Unknown error occurred.";
    }
    return "An error occurred.";
  };

  if (facilityError) {
    return (
      <div>Error loading facilities: {getErrorMessage(facilityError)}</div>
    );
  }
  if (bookingError) {
    return <div>Error loading bookings: {getErrorMessage(bookingError)}</div>;
  }

  // Check if facilitiesResponse is an object and extract facilities
  if (typeof facilitiesResponse !== "object" || !facilitiesResponse.data) {
    console.error(
      "Expected facilities to be an object with a data array, but got:",
      facilitiesResponse
    );
    return <div>Error: Facilities data is not in the expected format.</div>;
  }

  const facilities = facilitiesResponse.data; // Get the facilities array

  // Check if bookingsResponse is an object and extract bookings
  if (typeof bookingsResponse !== "object" || !bookingsResponse.data) {
    console.error(
      "Expected bookings to be an object with a data array, but got:",
      bookingsResponse
    );
    return <div>Error: Bookings data is not in the expected format.</div>;
  }

  const bookings = bookingsResponse.data; // Get the bookings array

  // Prepare data for the chart
  const salesData = facilities.map(
    (facility: any) => facility.pricePerHour || 0
  );
  const revenueData = bookings.map(
    (booking: any) => booking.payableAmount || 0
  );

  const series = [
    {
      name: "Sales",
      data: salesData,
    },
    {
      name: "Revenue",
      data: revenueData,
    },
  ];

  // Create the chart options using the facility names
  const options = createChartOptions(
    facilities.map((facility: any) => facility.name || "Unknown")
  );

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Profit this week
          </h4>
        </div>
        <div>{/* Your select options */}</div>
      </div>

      <div>
        <div id="chartTwo" className="-mb-9 -ml-5">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
