/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/Loading";
import { useGetFacilityQuery } from "@/redux/api/facilitesApi/facilitesApi";

const TopFacility = () => {
  const { data: facility, isLoading } = useGetFacilityQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="rounded-md border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Facilities
        </h4>
      </div>

      {/* Header for Facility list */}
      <div className="hidden sm:grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark md:px-6 2xl:px-7.5">
        <div className="col-span-2 lg:col-span-3 flex items-center">
          <p className="font-medium text-sm sm:text-base text-gray-600 dark:text-white">
            Facility Name
          </p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium text-sm sm:text-base text-gray-600 dark:text-white">
            Price
          </p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium text-sm sm:text-base text-gray-600 dark:text-white">
            Location
          </p>
        </div>
      </div>

      {/* Facility rows */}
      {facility?.data.slice(0, 3).map((product: any, key: string) => (
        <div
          className="grid grid-cols-1 sm:grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark md:px-6 2xl:px-7.5 gap-4"
          key={key}
        >
          {/* Facility Name with Image */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex items-center gap-4">
            <div className="h-16 w-16 rounded-md overflow-hidden">
              <img
                src={product.image}
                alt="Facility"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-sm sm:text-base text-black dark:text-white">
              {product.name}
            </p>
          </div>

          {/* Price */}
          <div className="col-span-1 flex items-center sm:justify-start">
            <p className="text-sm sm:text-base text-black dark:text-white">
              ${product.pricePerHour}/hr
            </p>
          </div>

          {/* Location */}
          <div className="col-span-1 flex items-center sm:justify-start">
            <p className="text-sm sm:text-base text-black dark:text-white">
              {product.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopFacility;
