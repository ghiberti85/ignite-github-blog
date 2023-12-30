import { formatDistanceToNow, parseISO } from 'date-fns'

export function dateFormatter(date: string) {
  return formatDistanceToNow(parseISO(date), {
    addSuffix: true,
  })
}