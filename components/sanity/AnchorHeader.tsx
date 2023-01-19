import Link from 'next/link';

export default function SanityAnchorHeader(props) {
  const { node, children } = props;
  const { style, _key } = node;

  const HeadingTag = style;
  // Even though HTML5 allows id to start with a digit, we append it with a letter to avoid various JS methods to act up and make problems
  const headingId = children
    .join('')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '') // Remove leading and trailing dashes
    .toLowerCase();

  return (
    <HeadingTag id={headingId}>
      <Link
        href={`#${headingId}`}
        aria-hidden="true"
        tabIndex={-1}
        className={'anchor'}
      />
      <span>{children}</span>
    </HeadingTag>
  );
}
