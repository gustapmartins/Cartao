export interface Input {
    type: string
    id: string
    name: string
    placeholder: string
    onChange: (e: any) => void
    minlength?: number
    maxlength?: number
}