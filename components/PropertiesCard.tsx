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
    <div className="h-full">
      <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {getProperties.map((property) => {
          return <PropertyCard key={property.id} propertyModel={property} />;
        })}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:text-primary-foreground"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:text-primary-foreground"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis className="bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:text-primary-foreground" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className="bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:text-primary-foreground"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PropertiesCard;
