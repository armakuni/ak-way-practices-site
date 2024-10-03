import "@testing-library/jest-dom/vitest";
import { vi } from "vitest"


vi.mock(`gatsby`, async () => {
  const gatsby = await vi.importActual<typeof import("gatsby")>(`gatsby`)
  return {
    ...gatsby,
    graphql: vi.fn(),
  }
})