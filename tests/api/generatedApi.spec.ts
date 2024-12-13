import { test, expect } from "@playwright/test";
import { Api } from "../../generatedApi/localhost/Api";
import { describe } from "node:test";
import { HttpStatusCode } from "axios";
import { config } from "dotenv";

config();

const api = new Api({
    baseURL: process.env.HOTELS,
});

// тут используются генеративные апи клиенты
describe("Hotels agregator", () => {
    test("Login user", async () => {
        const testUser = {
            email: "eldar@meow.ru",
            password: "123456",
        };

        const response = await api.authControllerLogin({
            email: testUser.email,
            password: testUser.password,
        });

        expect(response.status).toBe(HttpStatusCode.Created);
        expect(response.data.email).toBe(testUser.email);
        expect(response.data.name).toBeDefined();
        expect(response.data.contactPhone).toBeDefined();
    });

    test("Forbiden if not loged in", async () => {
        try {
            const response = await api.hotelsControllerCreateHotel({
                title: "test",
                description: "meow",
            });
        } catch (error) {
            expect(error.status).toBe(HttpStatusCode.Forbidden);
        }
    });
});
