export function cook(id: string, nowTimestamp: number, layers: string[]) {
  return { id, layers, startTimestamp: nowTimestamp, status: "COOKING" };
}
