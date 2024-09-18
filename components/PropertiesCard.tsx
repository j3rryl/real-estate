import { db } from "@/db";
import { properties } from "@/db/schema";
import PropertyCard from "./PropertyCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const PropertiesCard = async () => {
  const getProperties = await db.select().from(properties).limit(20);

  return (
    <>
      <div className="gap-2 grid grid-cols-2 md:grid-cols-3">
        {getProperties.map((property) => {
          return <PropertyCard key={property.id} propertyModel={property} />;
        })}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PropertiesCard;
