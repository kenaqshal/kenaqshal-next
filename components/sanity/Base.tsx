import CustomLink from 'components/CustomLink';
import Link from 'next/link';
import SanityAnchorHeader from './AnchorHeader';
import SanityCode from './Code';
import SanityImage from './Image';
import SanityLink from './Link';
import { PortableText } from '@portabletext/react';

export default function SanityContent(props) {
    const {content} = props;
    const components = {
        block: {
          h1: SanityAnchorHeader,
          h2: SanityAnchorHeader,
          h3: SanityAnchorHeader,
          h4: SanityAnchorHeader,
          h5: SanityAnchorHeader,
          h6: SanityAnchorHeader,
        },
        types: {
          image: SanityImage,
          code: SanityCode
        },
        marks: {
          link: SanityLink,
        },
      };
  return (
    <PortableText value={content} components={components} />
  )
}
