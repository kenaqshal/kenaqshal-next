import CustomLink from 'components/CustomLink';
import Link from 'next/link';

export default function SanityLink(props) {
  const { value, text } = props;
  return <CustomLink href={value?.href}>{text}</CustomLink>;
}
