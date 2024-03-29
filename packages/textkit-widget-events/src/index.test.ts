import * as SDK from "@statflo/widget-sdk"

import * as Package from "."
import { createWidgetState, EventNames, WidgetState, WidgetViewSize } from "."

describe("package exports", () => {
    it("should export the correct items", () => {
        expect(Package.ContainerClient).toEqual(SDK.ContainerClient);
        expect(Package.WidgetClient).toEqual(SDK.WidgetClient);
        expect(Package.Helpers).toEqual(SDK.Helpers);
        expect(Package.WidgetState).toEqual(WidgetState);
        expect(Package.WidgetViewSize).toEqual(WidgetViewSize);
        expect(Package.EventNames).toEqual(EventNames);
        expect(Package.createWidgetState).toEqual(createWidgetState);
    })
});