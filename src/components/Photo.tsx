import React, { useState } from 'react';
import { photos } from '../config/images';

type Props = { photo: keyof typeof photos; className?: string; eager?: boolean; children?: React.ReactNode };

export function Photo({ photo, className = '', eager = false, children }: Props) {
  const [failed, setFailed] = useState(false);
  const asset = photos[photo];
  return (
    <div className={`photo-frame ${className} ${failed ? 'photo-fallback' : ''}`}>
      {!failed && <img src={asset.src} alt={asset.alt} style={{ objectPosition: asset.position ?? 'center' }}
        loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} />}
      <div className="photo-fallback-art" aria-hidden="true"><span>✳</span><span>◡</span><span>✦</span></div>
      {children}
    </div>
  );
}
