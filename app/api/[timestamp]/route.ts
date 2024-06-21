import { NextResponse } from "next/server";

import { parseDate } from "@/utils";

export async function GET(
  _: Request,
  context: { params: { timestamp: string } }
) {
  return NextResponse.json(parseDate(context.params.timestamp));
}
