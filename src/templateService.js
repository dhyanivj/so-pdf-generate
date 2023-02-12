import { fetch } from 'whatwg-fetch';

export async function fetchTemplate(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load template: ${response.status} ${response.statusText}`);
  }
  const templateBytes = await response.arrayBuffer();
  return templateBytes;
}
