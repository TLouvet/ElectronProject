import fs from "fs";
import path from "path";
import { ReadError } from "../../../error/ReadError";

export function readEditorFile<T>(filename: string): T[] {
  try {
    const data = fs.readFileSync(path.join(process.cwd(), "data/", filename), {
      encoding: "utf-8",
    });
    return JSON.parse(data);
  } catch (error) {
    throw new ReadError("Error while trying to read file:" + filename);
  }
}
