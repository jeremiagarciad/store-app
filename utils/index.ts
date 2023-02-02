/**
 * if you are not familiar with (date-fns).date
 * https://date-fns.org
 */
// formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
//=> "3 days ago"

import { format, formatDistance, subDays } from "date-fns";

const today = new Date();

const today_format = format(today, "yyyy/MM/dd");

export const timeElapsed = (day: any, time_elapsed: any) => {
  const getTime = formatDistance(subDays(day, time_elapsed), day, {
    addSuffix: true,
  });
  return getTime;
};
