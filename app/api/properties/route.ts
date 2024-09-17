import { db } from "@/db";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;
  const getProperties = await db.query.properties.findMany({
    limit: pageSize,
    offset: (page - 1) * pageSize,
  });

  return Response.json(getProperties, { status: 200 });
}
