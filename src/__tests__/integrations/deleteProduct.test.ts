import { prisma } from "../../database/prisma"
import { carCreateBodyListMock, carCreateBodyMock } from "../__mocks__/car.mocks"
import { request } from "../utils/request";

describe("Integration test: delete car", () => {
    test("should be able to delete a car sucessfully", async () => {
        const car = await prisma.car.create({data: carCreateBodyMock});

        await request.delete(`/cars/${car.id}`).expect(204);
        
    })
})