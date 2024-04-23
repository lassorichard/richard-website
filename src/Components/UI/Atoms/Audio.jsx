export const Audio = ({ src, className, customAttribute }) => {
  const attribute = customAttribute ? { [customAttribute]: customAttribute } : {};

  return <audio className={className} src={src} {...attribute}></audio>;
}