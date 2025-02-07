import { NextRequest, NextResponse } from "next/server";
import { shipengine } from "../../../../../lib/helper/shipEngine";

export async function GET(
  req: NextRequest,
  { params }: { params: { labelId: string } } // ✅ Fixed Params
) {
  const labelId = params.labelId; 
  if (!labelId) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  try {
    const label = await shipengine.trackUsingLabelId(labelId);

    console.log("Tracking Data:", label); // ✅ Debugging

    return NextResponse.json(label, { status: 200 });
  } catch (error) {
    console.error("ShipEngine API Error:", error);

    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Something went wrong" }), 
      { status: 500 }
    );
  }
}
