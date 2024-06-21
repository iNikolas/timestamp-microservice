import { NextResponse } from "next/server";

import { parseDate } from "@/utils";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  return NextResponse.json(parseDate());
}
