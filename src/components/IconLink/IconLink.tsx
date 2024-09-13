interface Props {
  src: string;
  alt: string;
  className: string;
}
export const IconLink: React.FC<Props> = ({src, alt, className}) => (
  <a className={className}>
    <img src={src} alt={alt} />
  </a>
)