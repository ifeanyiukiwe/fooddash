export function isValidUkPostcode(postcode: string): boolean {
  const postDetail = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/;
  const tidied = postcode.trim().toUpperCase();
  return postDetail.test(tidied);
}
