import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'db.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(jsonData);
  return NextResponse.json(data);
}