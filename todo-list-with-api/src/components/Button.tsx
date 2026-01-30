'use client'
import Image from 'next/image'
import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  label: string | null, 
  imgSrc: string,
  width: number,
  height: number,
  alt: string,
}

const Button = ({ label, imgSrc, width, height, alt, onClick, className } : ButtonProps) => {
  return (
    <button 
      className={`flex flex-col gap-0.5 justify-center items-center mx-3 outline-0 cursor-pointer ${className ?? ''}`}
      onClick={onClick}
    >
      <Image
        src={imgSrc}
        width={width}
        height={height}
        alt={alt}
      />
      {label}
    </button>
  )
}

export default Button