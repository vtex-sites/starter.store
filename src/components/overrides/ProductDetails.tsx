import { SectionOverride } from "@faststore/core";

import { usePDP } from "@faststore/core";
import { Image_unstable as Image } from "@faststore/core/experimental";

import { ImageGallery, ImageGalleryViewer, SkuSelector } from "@faststore/ui";
import { useState } from "react";

const SECTION = "ProductDetails" as const;

const ImageComponent = ({ url, alternateName }: {url: string, alternateName?: string}) => {
  return <Image src={url} alt={alternateName} width={68} height={68}/>
}

const override: SectionOverride = {
  section: SECTION,
  components: {
    __experimentalImageGallery: {
      Component: () => {
        const { data } = usePDP();
        const [selectedIndex, setSelectedIndex] = useState<number>(0);
        const currentImage = data.product.galleryImages[selectedIndex];

        return (
          <ImageGallery
            images={data.product.galleryImages}
            ImageComponent={ImageComponent}
            selectedImageIdx={selectedIndex}
            setSelectedImageIdx={setSelectedIndex}
            data-fs-product-details-gallery="true"
          >
            <ImageGalleryViewer>
              <Image
                sizes="(max-width: 360px) 50vw, (max-width: 768px) 90vw, 50vw"
                width={691}
                height={691 * (3 / 4)}
                loading="eager"
                src={currentImage.url}
                alt={currentImage.alternateName}
              />
            </ImageGalleryViewer>
          </ImageGallery>
        );
      },
    },
  },
};

export { override };
