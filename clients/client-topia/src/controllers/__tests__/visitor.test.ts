import MockAdapter from "axios-mock-adapter";
import { visitors } from "../../__mocks__";
import { Visitor as VisitorClass, Topia } from "controllers";
import { VisitorFactory } from "factories";

const apiDomain = "api.topia.io";
const id = visitors["1"].playerId;

describe("Visitor Class", () => {
  let mock: MockAdapter, testVisitor: VisitorClass, topia: Topia, Visitor: VisitorFactory;

  beforeEach(() => {
    topia = new Topia({
      apiDomain,
      apiKey: "key",
    });
    mock = new MockAdapter(topia.axios);
    Visitor = new VisitorFactory(topia);
    testVisitor = Visitor.create(id, "exampleWorld");
  });

  afterEach(() => {
    mock.restore();
    jest.resetAllMocks();
  });

  it("should move a list of visitors to uniquely specified coordinates", async () => {
    mock.onPut(`https://${apiDomain}/api/world/exampleWorld/visitors/${id}/move`).reply(200);
    await testVisitor.moveVisitor({
      shouldTeleportVisitor: true,
      x: 100,
      y: 100,
    });
    expect(mock.history.put.length).toBe(1);
  });
});
