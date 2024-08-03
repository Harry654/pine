// src/utils/dateDifference.ts

import moment from 'moment';
import 'moment-duration-format';

export const dateDifference = (date: Date): string => {
  const now = moment();
  const givenDate = moment(date);

  const duration = moment.duration(now.diff(givenDate));
  const minutes = duration.asMinutes();

  if (minutes < 60) {
    return `${Math.floor(minutes)} minutes`;
  }

  const hours = duration.asHours();
  if (hours < 24) {
    return `${Math.floor(hours)} hours`;
  }

  const days = duration.asDays();
  if (days < 30) {
    return `${Math.floor(days)} days`;
  }

  const months = duration.asMonths();
  if (months < 12) {
    return `${Math.floor(months)} months`;
  }

  const years = duration.asYears();
  return `${Math.floor(years)} years`;
};
