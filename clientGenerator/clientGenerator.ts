import { generateApi } from "swagger-typescript-api";
import { generatorConfig } from "./generatorConfig";
import { saveSpectToFile } from "./chemaUtils";

export async function generateApiClient(baseUrl: string): Promise<void> {
    try {
        await saveSpectToFile(baseUrl);
    } catch (error) {
        console.error(
            `Could not save specification for service ${baseUrl}. Reason: "${error}"`
        );
        return;
    }

    const config = generatorConfig(baseUrl);
    try {
        await generateApi(config);
        console.info(`Successfully generated client for service ${baseUrl}`);
    } catch (error) {
        throw error;
        console.error(
            `Could not generate client for service ${baseUrl}. Reason: "${error}"`
        );
    }
}

// generateApiClient('https://petstore.swagger.io')
