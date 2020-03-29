const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

const MOCK_ONG = {
  name: "APAD",
  email: "contato@apad.com.br",
  whatsapp: "1185475580",
  city: "Rio do Sul",
  uf: "SC"
};

const MOCK_INCIDENT = {
  title: "Caso 1",
  description: "Detalhes do caso",
  value: 120
};

let MOCK_INCIDENT_ID = "";
let MOCK_ONG_ID = "";

describe("ONG", () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send(MOCK_ONG);

    MOCK_ONG_ID = response.body.id;

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });

  it("should bring a list of ONGs", async () => {
    const response = await request(app).get("/ongs");

    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
  });

  it("should bring a specific list of incidents of a ONG", async () => {
    const response = await request(app)
      .get("/profile")
      .set("Authorization", MOCK_ONG_ID);

    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
  });

  it("should bring an error when trying to delete a ONG of invalid id", async () => {
    const MOCK_ONG_ID_INVALID = "00";

    const response = await request(app)
      .delete("/ongs")
      .set("Authorization", MOCK_ONG_ID_INVALID);

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("error");
  });

  it("should a delete a ONG", async () => {
    const response = await request(app)
      .delete("/ongs")
      .set("Authorization", MOCK_ONG_ID);

    expect(response.status).toEqual(204);
  });
});

describe("Incident", () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();

    const response = await request(app)
      .post("/ongs")
      .send(MOCK_ONG);

    MOCK_ONG_ID = response.body.id;
  });

  it("should be able to create a new Incident", async () => {
    const response = await request(app)
      .post("/incidents")
      .set("Authorization", MOCK_ONG_ID)
      .send(MOCK_INCIDENT);

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty("id");

    MOCK_INCIDENT_ID = response.body.id;
  });

  it("should bring a list and a total incidents", async () => {
    const response = await request(app).get(`/incidents`);

    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
    expect(response.header).toHaveProperty("x-total-count");
  });

  it("should be try a delete ong and bring a error, has incidents associated with a ONG", async () => {
    const response = await request(app)
      .delete("/ongs")
      .set("Authorization", MOCK_ONG_ID);

    expect(response.status).toEqual(401);
    expect(response.body).toHaveProperty("error");
  });

  it("should be a delete incident", async () => {
    const response = await request(app)
      .delete(`/incidents/${MOCK_INCIDENT_ID}`)
      .set("Authorization", MOCK_ONG_ID);

    expect(response.status).toEqual(204);
  });
});

describe("Sessions", () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();

    const response = await request(app)
      .post("/ongs")
      .send(MOCK_ONG);

    MOCK_ONG_ID = response.body.id;
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should bring a erro, logon with ID invalid", async () => {
    const MOCK_ONG_ID_INVALID = "4das5da";

    const response = await request(app)
      .post("/sessions")
      .send({ id: MOCK_ONG_ID_INVALID });

    expect(response.status).toEqual(400);
  });

  it("should bring a name of ONG", async () => {
    const response = await request(app)
      .post("/sessions")
      .send({ id: MOCK_ONG_ID });

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty("name");
  });
});
