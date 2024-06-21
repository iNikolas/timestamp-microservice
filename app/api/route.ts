import { NextResponse } from "next/server";

import { parseDate } from "@/utils";

export async function GET(req: Request) {
  return NextResponse.json(parseDate());
}
