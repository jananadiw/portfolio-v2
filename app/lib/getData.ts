import fs from 'fs/promises';
import path from 'path';

export async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'db.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  return JSON.parse(jsonData);
}