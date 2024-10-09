import React, { ReactNode } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Importing icons from react-icons

interface CardDataStatsProps {
  title: string;
  total: string; // total is a string
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode; // children to render any icons or extra content
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="flex flex-col justify-between h-full rounded-lg border border-stroke bg-white px-6 py-4 shadow-lg transition-shadow duration-200 hover:shadow-xl dark:border-strokedark dark:bg-boxdark min-w-[250px] w-full">
      {" "}
      {/* Adjusted min-w and w-full */}
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-3xl font-bold text-black dark:text-white">
            {" "}
            {/* Increased font size */}
            {total}
          </h4>
          <span className="text-sm font-medium text-gray-500">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp ? "text-green-500" : "text-red-500"
          }`}
        >
          {rate}
          {levelUp && <FaArrowUp className="text-green-500" />}
          {levelDown && <FaArrowDown className="text-red-500" />}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
