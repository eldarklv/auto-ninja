import axios from "axios";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

export async function saveSpectToFile(baseUrl: string): Promise<void> {
    const urlToSpec = new URL(`${baseUrl}/api-json`);

    const dirToSave = `generatedApi/${urlToSpec.hostname}`;
    const fileToWrite = `${dirToSave}/openapi.json`;

    try {
        const { data } = await axios.get(urlToSpec.href);

        await mkdir(dirToSave, { recursive: true });
        await writeFile(fileToWrite, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(error);
        throw new Error(`Error trying save Swagger spec for ${baseUrl}`);
    }
}
