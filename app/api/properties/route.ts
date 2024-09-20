import { db } from "@/db";
import { properties } from "@/db/schema";
import { count } from "drizzle-orm";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;

  // const headersList = headers();
  // const ip = headersList.get("x-forwarded-for");
  // console.log("User ip is ", ip);

  const getProperties = await db.query.properties.findMany({
    limit: pageSize,
    offset: (page - 1) * pageSize,
  });

  const propertiesCount = (
    await db.select({ count: count() }).from(properties)
  )[0].count;
  const pages = Math.round(propertiesCount / pageSize);

  return Response.json(
    { data: getProperties, count: propertiesCount, pages: pages },
    { status: 200 }
  );
}
