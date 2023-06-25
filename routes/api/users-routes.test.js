/**
1. відповідь повина мати статус-код 200
2. у відповіді повинен повертатися токен
3. у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String
 */
const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../../app');

const { DB_HOST_TEST, PORT } = process.env;

describe("test login controller", () => {
	let server = null;
	beforeAll(async () => {
		await mongoose.connect(DB_HOST_TEST);
		server = app.listen(PORT)
	})

	afterAll(async () => {
		await mongoose.connection.close();
		server.close()
	})

	test("response must have a status 200", async () => {
		const loginData = {
			email: "verado3@gmail.com",
			password: "123123"
		}
		const { statusCode } = await request(app).post("/api/users/login").send(loginData);

		expect(statusCode).toBe(200);
	})
	test("response must return token", async () => {
		const loginData = {
			email: "verado3@gmail.com",
			password: "123123"
		}
		const { body } = await request(app).post("/api/users/login").send(loginData);

		expect(Boolean(body.token)).toBe(true);
	})
	test("response must return object 'user' with 2 fields: 'email' and 'subscription' with type: String", async () => {
		const loginData = {
			email: "verado3@gmail.com",
			password: "123123"
		}
		const { body } = await request(app).post("/api/users/login").send(loginData);

		expect(Boolean(body.user)).toBe(true);
		expect(typeof(body.user)).toBe("object");
		expect(Boolean(body.user.email)).toBe(true);
		expect(Boolean(body.user.subscription)).toBe(true);
		expect(typeof(body.user.email)).toBe("string");
		expect(typeof(body.user.subscription)).toBe("string");
	})
})