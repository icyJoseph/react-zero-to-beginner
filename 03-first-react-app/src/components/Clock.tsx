type ClockProps = { time: Date };

const formatter = new Intl.DateTimeFormat("sv-SE", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

export function Clock({ time }: ClockProps) {
  return <p className="clock">{formatter.format(time)}</p>;
}
