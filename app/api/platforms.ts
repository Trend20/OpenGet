import { Platform } from "@/types/platform";
import { OPENSOURCE_PLATFORMS_API_URL } from "@/config";

export async function getAllPlatforms(
  currentPage: string
): Promise<Platform[]> {
  const response = await fetch(
    `${OPENSOURCE_PLATFORMS_API_URL}/location?page=${currentPage}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}

export async function getPlatformById(locationId: string): Promise<Platform> {
  const response = await fetch(
    `${OPENSOURCE_PLATFORMS_API_URL}/location/${locationId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}
