export default function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number);
  return new Date(0, 0, 0, hours, minutes).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}
