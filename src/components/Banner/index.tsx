import { useRef } from 'react'

import { Image_unstable as FSImage } from '@faststore/core/experimental'

function Banner() {
  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <div>
      <FSImage ref={imageRef} src='https://vtexhelp.vtexassets.com/assets/docs/src/fs-package-local-install___db14cf215e613a08aca9ba5d779eb37a.png' />
    </div>
  )
}

export default Banner
