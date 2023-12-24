import fs from "fs";
import path from "path";
import { WriteError } from "../../../error/WriteError";

export function writeEditorFile(filename: string, data: object) {
  try {
    fs.writeFileSync(
      path.join(process.cwd(), "data/", filename),
      JSON.stringify(data)
    );
  } catch (error) {
    throw new WriteError("Error writing file:" + filename);
  }
}
