import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { PropertyModel } from "@/db/schema";
import Image from "next/image";
import { Button } from "./ui/button";
import { truncateText } from "@/lib/helper";

const PropertyCard = ({ propertyModel }: { propertyModel: PropertyModel }) => {
  return (
    <Card>
      <CardHeader className="text-primary font-bold">
        {propertyModel.name}
      </CardHeader>
      <CardContent>
        <div className="w-full h-40 relative !rounded-lg overflow-hidden mb-3">
          <Image
            src={propertyModel.thumbnail as string}
            alt="Property Image"
            fill={true}
          />
        </div>
        <p className="!h-20 overflow-hidden">
          {truncateText(propertyModel.description!)}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row justify-between items-center gap-2">
        <Button className="w-full">View</Button>
        <Button className="w-full">Buy</Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
