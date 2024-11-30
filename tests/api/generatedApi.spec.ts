import { test, expect } from '@playwright/test';
import { Api } from '../../generatedApi/myApi';

const api = new Api()

test('check generated api work', async () => {
    const response = await api.user.loginUser({
        username: '123',
        password: '123'
    })

    console.log(response.data)

    expect(response.status).toBe(200)
    expect(true).toBeTruthy()
});