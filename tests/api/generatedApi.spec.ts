import { test, expect } from "@playwright/test";
import { User } from "../../generatedApi/petstore.swagger.io/User";

const user = new User();

test("check generated api work", async () => {
    const response = await user.createEventUserEventCreatePost({})

    console.log(response.status);
    console.log(response.data);
});
