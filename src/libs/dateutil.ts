import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

export const formatDate = (date?: string) => {
  if (date) {
    dayjs.extend(utc)
    dayjs.extend(timezone)
    return dayjs.utc(date).tz('Asia/Tokyo').format('d MMMM, YYYY')
  }
  return 'unknown date'
}
