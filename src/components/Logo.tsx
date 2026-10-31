import React from 'react';

interface LogoProps {
  className?: string;
  size: number; // intrinsic display size in px (used for width/height to avoid layout shift)
  eager?: boolean;
}

// RIET emblem: WebP with PNG fallback, explicit dimensions, async decoding, lazy below the fold.
export const Logo: React.FC<LogoProps> = ({ className = '', size, eager = false }) => (
  <picture style={{ display: 'contents' }}>
    <source srcSet="/riet-logo.webp" type="image/webp" />
    <img
      src="/riet-logo.png"
      alt="RIET logo"
      width={size}
      height={size}
      decoding="async"
      loading={eager ? 'eager' : 'lazy'}
      {...(eager ? { fetchPriority: 'high' as const } : {})}
      className={className}
    />
  </picture>
);
