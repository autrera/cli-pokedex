export function cleanInput(input: string): string[] {
  const separeted = input.split(" ");
  return separeted.filter((s) => s != "");
}
