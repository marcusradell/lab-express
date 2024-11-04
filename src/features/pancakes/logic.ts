type CookResult =
  | { status: "INVALID"; error: { code: "NO_LAYERS" } }
  | { id: string; layers: string[]; startTimestamp: number; status: "COOKING" };

export function cook(
  id: string,
  nowTimestamp: number,
  layers: string[]
): CookResult {
  if (!layers.length) {
    return { status: "INVALID", error: { code: "NO_LAYERS" } };
  }

  return { id, layers, startTimestamp: nowTimestamp, status: "COOKING" };
}
