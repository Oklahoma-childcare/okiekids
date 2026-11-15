import React, { useState } from 'react';
import { site } from '../config/site';

export function Logo({ inverted = false }: {inverted?: boolean}) {
  const [broken, setBroken] = useState(false);
  return (
    <a className={`site-brand ${inverted ? 'site-brand-inverted' : ''}`} href="/" aria-label={`${site.name} homepage`}>
      <span className="brand-emblem" aria-hidden="true">
        {!broken ? <img src={site.logoUrl} alt="" width="58" height="58" onError={() => setBroken(true)} /> : <strong>OK!</strong>}
      </span>
      <span className="brand-name"><strong>okie kids<span className="brand-spark">✳</span></strong><small>LEARNING ACADEMY</small></span>
    </a>
  );
}
