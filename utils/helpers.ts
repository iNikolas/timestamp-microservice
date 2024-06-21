export function parseDate(input?: string) {
  let date;

  if (!input) {
    date = new Date();
  } else {
    const timestamp = Number(input);
    const isTimestamp = !Number.isNaN(timestamp);
    date = isTimestamp ? new Date(timestamp) : new Date(input);
  }

  const unix = date.getTime();
  const utc = date.toUTCString();

  if (Number.isNaN(unix)) {
    return {
      error: utc,
    };
  }

  return {
    unix,
    utc,
  };
}
