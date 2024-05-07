export default function formTabDay(dateString) {
  return new Date(dateString).toLocaleDateString("en-GB", { weekday: "long" });
}
