import { parseApiResponse } from './api';

describe("API parsing", () => {
  test("it should parse API response correctly", async () => {
    const mockApiResponse = JSON.stringify([{ id: 1, name: "Test Line" }]);
    global.fetch = jest.fn(() => 
      Promise.resolve({
        json: () => Promise.resolve(JSON.parse(mockApiResponse))
      })
    );

    const result = await parseApiResponse('/api/lines');
    expect(result).toEqual([{ id: 1, name: "Test Line" }]);
  });
});
