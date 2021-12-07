export const validateTZ = (address: string) =>
  /^(tz|KT)[0-9a-z]{34}$/i.test(address);
