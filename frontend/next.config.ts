import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,  // 今のフォルダ（frontend）を絶対パスで基準位置に指定
  },
};

export default nextConfig;
