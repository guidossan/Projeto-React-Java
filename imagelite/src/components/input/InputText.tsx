import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import React from "react";


interface InputTextProps {
    style?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeHolder?: string
}
export const InputText: React.FC<InputTextProps> = ({
    onChange, style, placeHolder
}) =>{
    return (
        <input type="text" 
            onChange={onChange}
            placeholder={placeHolder}
            className={`${style}border px-5 py-2 rounded-lg text-grey-900`} />
        
    )
}