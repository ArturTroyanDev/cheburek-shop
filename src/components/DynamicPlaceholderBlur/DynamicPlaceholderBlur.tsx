import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";


type Props = {
    src?: any,
    alt?: any,
    width?: number,
    height?: number,
    styles?: string,
};


export async function DynamicPlaceholderBlur({ src, alt, width, height, styles }: Props) {
    // console.log(src)

    const buffer = await fetch(src).then(async (res) => {
        return Buffer.from(await res.arrayBuffer())
    })

    const { base64 } = await getPlaiceholder(buffer);

    return (
        <Image
            className={styles}
            src={src}
            alt={alt}
            width={width}
            height={height}
            placeholder="blur"
            blurDataURL={base64}
            
        />
    )
} 