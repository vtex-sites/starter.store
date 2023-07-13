import React from 'react'
import { Button as UIButton, ButtonProps } from '@faststore/ui'
 
export function CustomBuyButton(props: ButtonProps) {
  return (
    <UIButton
      {...props}
      icon={undefined}
      variant="primary"
      onClick={(event) => {
        alert('You will love this product!')
        props.onClick?.(event)
      }}
    >
      Add to Bag
    </UIButton>
  )
}