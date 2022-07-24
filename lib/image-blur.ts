import path from 'path';
import { promisify, inspect } from 'util';

import imageSize from 'image-size';
import type { ISizeCalculationResult } from 'image-size/dist/types/interface';
import { getPlaiceholder } from 'plaiceholder';
import type { Node } from 'unist';
import { visit } from 'unist-util-visit';

const sizeOf = promisify(imageSize);
interface ImageNode {
  type: 'element' | string;
  tagName: 'img' | string;
  name?: string;
  properties: {
    src: string;
    height?: number;
    width?: number;
    blurDataURL?: string;
    placeholder?: 'blur' | 'empty';
    loading?: 'lazy' | 'eager';
    layout?: 'fill' | 'intrinsic ' | 'fixed' | 'responsive';
  };
  children?: Array<ImageNode>;
  parent?: ImageNode;
}

const isImageNode = (node: Node, custom: boolean = false): node is ImageNode => {
  const img = node as ImageNode;
  if (custom) {
    //start investigate  attributes: [{type: 'mdxJsxAttribute', name: 'x', value: 'y'}],
    // on https://www.npmjs.com/package/mdast-util-mdx-jsx/v/1.0.0
    // mdxJsxToMarkdown
    return (
      img.type === 'mdxJsxFlowElement' &&
      img.name === 'Image' &&
      img.properties &&
      typeof img.properties.src === 'string'
  );
  }
  return (
      img.type === 'element' &&
      img.tagName === 'img' &&
      img.properties &&
      typeof img.properties.src === 'string'
  );
};

interface BlurResult {
  size: {
    width: number;
    height: number;
  };
  blur64?: string;
}

export const getBlurData = async (
    imageSrc?: string,
    placeholderSize: number = 12,
): Promise<BlurResult | null> => {
  if (!imageSrc) return null;
  const isExternal = imageSrc.startsWith('http');
  let res: ISizeCalculationResult | undefined;
  let blur64: string;

  if (!isExternal) {
    res = await sizeOf(path.join(process.cwd(), 'public', imageSrc));
    const plaiceholderResult = await getPlaiceholder(imageSrc, {
      size: placeholderSize,
    });
    res = {
      ...res,
      width: plaiceholderResult.img.width,
      height: plaiceholderResult.img.height,
    };
    blur64 = plaiceholderResult.base64;
  } else {
    const imageRes = await fetch(imageSrc);
    const arrayBuffer = await imageRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res = await imageSize(buffer);
    const plaiceholderResult = await getPlaiceholder(buffer, {
      size: placeholderSize,
    });
    res = {
      ...res,
      width: plaiceholderResult.img.width,
      height: plaiceholderResult.img.height,
    };
    blur64 = plaiceholderResult.base64;
  }

  if (!res) throw Error(`Invalid image with src "${imageSrc}"`);
  return {
    size: { width: res.width || 0, height: res.height || 0 },
    blur64,
  };
};

const addProps = async (node: ImageNode): Promise<ImageNode> => {
  const src = node.properties.src.replace(/["']/g, '').replace(/%22/g, '');
  const res = await getBlurData(src).catch(() => null);
  if (!res) return node;
  node.properties = {
    ...node.properties,
    width: res.size.width,
    height: res.size.height,
    blurDataURL: res.blur64,
    placeholder: 'blur',
    loading: 'lazy',
  };
  return node;
};

const imageMetadata = () => {
  return async (tree: Node) => {
    const images: ImageNode[] = [];

    // console.log(tree,'imageMetadata');

    visit(tree, 'element', (node) => {
      if (isImageNode(node)) {
        images.push(node);
      }
    });

    visit(tree, 'mdxJsxFlowElement', (node: any) => {
      console.log(inspect(node, false, null, true /* enable colors */),'imageMetadata')
      if (isImageNode(node, true)) {
        images.push(node);
      }
    });

    for (const image of images) {
      await addProps(image);
    }

    return tree;
  };
};

export default imageMetadata;
