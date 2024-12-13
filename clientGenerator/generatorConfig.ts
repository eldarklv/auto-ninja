import path from "node:path";
import { GenerateApiParams } from "swagger-typescript-api";

export const generatorConfig = (baseUrl: string): GenerateApiParams => {
    const hostName = new URL(baseUrl).hostname;
    const serviceDirPath = path.join(
        process.cwd(),
        "generatedApi",
        hostName ?? ""
    );
    return {
        input: `${serviceDirPath}/openapi.json`,
        // input: `api.json`,
        output: serviceDirPath,
        modular: true,
        httpClientType: "axios",
        defaultResponseType: "void",
        generateClient: true,
        patch: true,
        extractRequestParams: true,
        extractRequestBody: true,
        extractResponseBody: true,
        extractResponseError: true,
        extractEnums: true,
        extractingOptions: {
            requestBodySuffix: ["Request"],
            requestParamsSuffix: ["Params"],
            responseBodySuffix: ["Response"],
            responseErrorSuffix: ["Error"],
        },
        generateUnionEnums: true,
        extraTemplates: [
            {
                name: "data-contracts",
                path: "./clientGenerator/templates/base/data-contracts.ejs",
            },
        ],
    };
};
