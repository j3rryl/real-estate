import PropertiesCard from "@/components/PropertiesCard";
import React, { Suspense } from "react";

const Page = async () => {
  return (
    <div className="p-3 overflow-y-scroll">
      <Suspense fallback={<p>Loading...</p>}>
        <PropertiesCard />
      </Suspense>
    </div>
  );
};

export default Page;
