import { NextRequest, NextResponse } from "next/server"

const httpStatus = {
  OK: 200,
  BAD_REQUEST: 400,
}

export async function POST(request: NextRequest) {
  return NextResponse
    .json({
      message: 'POST request'
    }, { status: httpStatus.OK })
}

export async function GET(request: NextRequest) {
  return NextResponse
    .json({
      message: 'GET request'
    }, { status: httpStatus.OK })
}
