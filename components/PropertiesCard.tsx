import { db } from "@/db";
import { properties } from "@/db/schema";
import PropertyCard from "./PropertyCard";

const PropertiesCard = async () => {
  const getProperties = await db.select().from(properties).limit(20);

  return (
    <div className="gap-2 grid grid-cols-2 md:grid-cols-3">
      {getProperties.map((property) => {
        return <PropertyCard key={property.id} propertyModel={property} />;
      })}
    </div>
  );
};

export default PropertiesCard;
