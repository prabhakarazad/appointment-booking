export const DateFormat = (date) => {
  console.log(date);
  if (!date) return "";
  const year = date?.getFullYear();
  const month = String(date?.getMonth() + 1).padStart(2, "0");
  const day = String(date?.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export function formatDate(dateString) {
  const date = new Date(dateString);

  const options = { weekday: "long", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
