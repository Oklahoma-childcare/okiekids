import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { site } from '../config/site';

export function SocialLinks({ dark = false, labeled = false }: {dark?: boolean; labeled?: boolean}) {
  const accounts = [
    { name: 'Instagram', url: site.instagram, Icon: Instagram },
    { name: 'Facebook', url: site.facebook, Icon: Facebook },
    { name: 'YouTube', url: site.youtube, Icon: Youtube },
    { name: 'TikTok', url: site.tiktok, Icon: null },
    { name: 'Pinterest', url: site.pinterest, Icon: null },
  ].filter((account) => Boolean(account.url));
  return <div className={`social-links ${dark ? 'social-links-dark' : ''}`} aria-label="Social media links">
    {accounts.map(({name, url, Icon}) => <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Visit Okie Kids on ${name}`}>
      {Icon ? <Icon size={17} strokeWidth={2} aria-hidden="true" /> : <span aria-hidden="true">↗</span>}
      {labeled && <span>{name}</span>}
    </a>)}
  </div>;
}
