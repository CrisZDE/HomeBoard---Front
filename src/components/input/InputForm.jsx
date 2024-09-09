import React from "react";
import { forwardRef } from "react";

export const InputForm = forwardRef(({
    id,
    label,
    type = "text",
    placeholder,
    onInput,
    rows,
    inputClassName,
    divInputClassName,
    error,
    width = "100%" 
}, ref) => {

    return (
        <div className={`flex flex-col ${divInputClassName}`} style={{ width }}>
            <label
                htmlFor={id}
                className="text-dark font-sans font-bold pb-[1.03rem]" 
            >
                {label}
            </label>
            <div className="flex" style={{ width }}>
                {type === 'textarea' ? (
                    <textarea
                        id={id}
                        className={`w-full h-24 p-2 rounded-[0.9rem] ${inputClassName}`}
                        placeholder={placeholder}
                        rows={rows || 4}
                        ref={ref} 
                    />
                ) : (
                    <input
                        id={id}
                        type={type}
                        className={`w-full h-[2.75rem] pl-4 mb-[2.3rem] rounded-[0.9rem] bg-green placeholder:text-dark placeholder:font-sans ${inputClassName}`}
                        placeholder={placeholder}
                        ref={ref} 
                        onInput={onInput}
                    />
                )}
            </div>
            {error && (
                <p className="text-terracota text-sm">{error}</p>
            )}
        </div>
    );
});