/**
 * Formats a date string into a localized, long-form date string.
 * @param {string} date - The date string to format (e.g., "2024-07-20T14:48:00.000Z").
 * @returns {string} The formatted date string (e.g., "Sabtu, 20 Juli 2024").
 */
const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { showFormattedDate };
