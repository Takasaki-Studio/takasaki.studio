import {ImageLoader} from "next/dist/client/image";

const normalizeSrc = (src: string) => {
    return src.startsWith('/') ? src.slice(1) : src;
};

export const cloudflareLoader: ImageLoader = ({ src, width, quality }) => {
    const params = [`width=${width}`];
    if (quality) {
        params.push(`quality=${quality}`);
    }
    const paramsString = params.join(',');
    return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};
