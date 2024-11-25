import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'], // 외부 패키지 파일을 트랜스파일대상에 포함시키기, threejs를 추가함으로 번들 사이즈를 줄일 수 있음
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  }
};

export default withContentlayer(nextConfig);
