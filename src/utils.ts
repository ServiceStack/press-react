import { dateFmt, toDate, toDateFmt } from "@servicestack/client"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})
export const formatCurrency = (n?:number) => n ? formatter.format(n) : ''
export const formatDate = (s?:string) => s ? toDateFmt(s) : ''

export const dateInputFormat = (d:Date) => dateFmt(d).replace(/\//g,'-')

export function sanitizeForUi(dto:any) {
    if (!dto) return {}
    Object.keys(dto).forEach(key => {
        let value = dto[key]
        if (typeof value == 'string') {
            if (value.startsWith('/Date'))
                dto[key] = dateInputFormat(toDate(value))
        }
    })
    return dto
}

export function generateSlug(str:string) {
    return str
        .normalize('NFKD') // normalize() with NFKD returns Unicode Normalization Form
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\_/g,'-')       // Replace _ with -
        .replace(/\-\-+/g, '-')   // Replace multiple - with single -
        .replace(/\-$/g, '');     // Remove trailing -
}
export function dateLabel(date:any) {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
export function dateTimestamp(date:any) {
    try {
        return new Date(date).toISOString()
    } catch (e) {
        return '2000-01-01T00:00:00.000Z'
    }
}

const invalidTokens = ['function', 'Function', 'eval', '=>', ';']
const restrictedScope = Object.assign(Object.keys(globalThis).reduce((acc, k) => {
    acc[k] = undefined; return acc
}, {} as Record<string, any>))

export function scopedExpr(src: string) {
    if (invalidTokens.some(x => src.includes(x)))
        throw new Error(`Unsafe script: '${src}'`)

    return (new Function("with(this) { return (" + src + ") }")).call(restrictedScope)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
