import { ReactNode } from "react"

declare type HeaderListsProps ={
    name?:string,
    link:string,
    icon?:IconType,
    css:string
}

declare type CusomBtnProps ={
    text:string | ReactNode ,
    type?:"button"| "submit",
    handleclick?:()=>void,
    othercss:string,
    icon?:IconType

}
declare type InputProps ={
    placeholder:string;
     name:string;
     type:string;
    value?:string;
     handleChange:(e)=>void;
     othercss?:string
}