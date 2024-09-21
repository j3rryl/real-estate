"use client";
import { PropertyPaginatedResponse } from "@/db/schema";
import PropertyCard from "./PropertyCard";

import { useMemo, useState } from "react";
import { fetcher } from "@/lib/helper";
import useSWR from "swr";
import PaginationComponent from "./PaginationComponent";
import CardSkeleton from "./CardSkeleton";

const PropertiesCard = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useSWR<PropertyPaginatedResponse>(
    `/api/properties/?page=${page}`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );
  const properties = useMemo(() => {
    let filteredRows = [...(data?.data || [])];
    return filteredRows;
  }, [data?.data]);

  return (
    <div>
      {isLoading ? (
        <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4].map((loader) => {
            return <CardSkeleton key={loader} />;
          })}
        </div>
      ) : (
        <>
          <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {properties?.map((property) => {
              return (
                <PropertyCard key={property.id} propertyModel={property} />
              );
            })}
          </div>
          <PaginationComponent
            totalPages={data?.pages ?? 0}
            currentPage={data?.currentPage ?? 1}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
};

export default PropertiesCard;
