import Image from 'next/image';

export const ImageComponent = (props) => {
  const { src, alt, fetchPriority, ...rest } = props;

  return (
    <Image
      src={src}
      alt={alt}
      {...rest}
      // Use `fetchpriority` instead of  `fetchPriority`
      data-fetch-priority={fetchPriority}
    />
  );
};
