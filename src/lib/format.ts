const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** "2026-10" -> "Oct 2026", "2023-03-01" -> "Mar 1, 2023" */
export function formatDate(d: string): string {
  const [y, m, day] = String(d).split('-');
  const mon = MONTHS[Number(m) - 1] ?? m;
  return day ? `${mon} ${Number(day)}, ${y}` : `${mon} ${y}`;
}
