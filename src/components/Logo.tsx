import React from 'react';
import { site } from '../config/site';

/** The supplied official logo is used intact in both navigation and footer. */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a className={`site-brand site-brand-official ${inverted ? 'site-brand-inverted' : ''}`} href="/" aria-label={`${site.name} homepage`}>
      <img className="official-logo-image" src={site.logoUrl} alt={site.name} width="625" height="707" loading="eager" decoding="async" />
    </a>
  );
}
