import React from 'react'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  ...props
}) {
  const baseClass = 'btn'
  const variantClass = `btn-${variant}`
  const sizeClass = size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : ''
  const combinedClass = [baseClass, variantClass, sizeClass, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={combinedClass} onClick={onClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={combinedClass} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
