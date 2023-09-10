import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

export const formatDate = (date?: string) => {
  if (date) {
    dayjs.extend(utc)
    dayjs.extend(timezone)
    return dayjs.utc(date).tz('Asia/Tokyo').format('D MMMM, YYYY')
  }
  return 'unknown date'
}

export const formatYYYYMMDD = (date: string) => {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  return dayjs.utc(date).tz('Asia/Tokyo').format('YYYY-MM-DD')
}
