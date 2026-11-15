import React, { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Baby, BookOpen, CalendarDays, Check,
  ChevronDown, Clock3, ExternalLink, Heart, HeartHandshake, Mail, MapPin, Menu,
  MessageCircle, Phone, Puzzle, Rainbow, ShieldCheck, Sparkles, Star, Sun, X,
} from 'lucide-react';
import type { Route } from './config/seo';
import { site } from './config/site';
import { Logo } from './components/Logo';
import { Photo } from './components/Photo';
import { SocialLinks } from './components/SocialLinks';

const menu: {label: string; href: Route}[] = [
  {label: 'Home', href: '/'},
  {label: 'Programs', href: '/programs'},
  {label: 'Our Center', href: '/about'},
  {label: 'For Parents', href: '/parents'},
  {label: 'FAQs', href: '/faq'},
];

const programs = [
  {number:'01', slug:'infants', title:'Infants', age:'0–11 months', photo:'infants', summary:'A first chapter full of discoveries, familiar voices, and tiny milestones.', detail:'Explore infant care options for your little one. Ask the center about availability, daily routines, feeding and nap practices, and what to bring.'},
  {number:'02', slug:'toddlers', title:'Toddlers', age:'12–23 months', photo:'toddlers', summary:'For curious movers, determined explorers, and wonderfully big feelings.', detail:'Toddlers are finding their voices and independence. Ask about group routines, movement, sensory play, transitions, and how families receive updates.'},
  {number:'03', slug:'preschool', title:'Preschool', age:'2–4 years', photo:'preschool', summary:'Questions, friendships, make-believe, and discoveries around every corner.', detail:'Preschool is a busy season for social and early learning skills. Ask how play, storytelling, creativity, and kindergarten readiness are approached.'},
  {number:'04', slug:'school-age', title:'School-age', age:'5 years and older', photo:'schoolage', summary:'Room to keep growing, connecting, and trying something new.', detail:'School-age care is among the listed age groups. Confirm eligible grades, scheduling, transportation, holidays, and after-school arrangements directly with the center.'},
] as const;

function IconCircle({children, kind = ''}:{children:React.ReactNode; kind?:string}) { return <span className={`icon-circle ${kind}`}>{children}</span>; }
function Eyebrow({children, light = false}:{children:React.ReactNode; light?: boolean}) {return <span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span className="eyebrow-symbol">✳</span>{children}</span>;}
function Pill({children}:{children:React.ReactNode}) {return <span className="soft-pill">{children}</span>;}
function ButtonLink({href, children, dark = false, outline = false, external = false}:{href:string; children:React.ReactNode; dark?:boolean; outline?:boolean; external?:boolean}) {
  return <a href={href} className={`btn ${dark ? 'btn-dark' : ''} ${outline ? 'btn-outline' : ''}`} {...(external ? {target:'_blank', rel:'noopener noreferrer'} : {})}>{children}<ArrowUpRight size={17} strokeWidth={2.5} aria-hidden="true" /></a>;
}

function Header({route}:{route: Route}) {
  const [open, setOpen] = useState(false);
  return <>
    <div className="announcement-bar"><div className="shell announcement-inner">
      <span><Sun size={14} aria-hidden="true" /> A little bright spot in Sand Springs, Oklahoma</span>
      <span className="announcement-right"><Clock3 size={14} aria-hidden="true" /> Weekdays · 7:30 AM–5:30 PM</span>
    </div></div>
    <header className="site-header"><div className="shell nav-shell">
      <Logo />
      <nav className={`primary-nav ${open ? 'nav-open' : ''}`} id="main-navigation" aria-label="Main navigation">
        {menu.map(item => <a key={item.href} className={route===item.href?'current':''} aria-current={route===item.href?'page':undefined} href={item.href} onClick={()=>setOpen(false)}>{item.label}</a>)}
        <a className="nav-mobile-contact" href="/contact" onClick={()=>setOpen(false)}>Contact us <ArrowUpRight size={17} /></a>
      </nav>
      <div className="nav-actions"><a className="nav-phone" href={`tel:${site.phoneLink}`} aria-label={`Call ${site.phone}`}><Phone size={17}/></a><a className="nav-contact" href="/contact">Get in touch <ArrowUpRight size={16}/></a>
        <button className="mobile-menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open?'Close navigation':'Open navigation'}>{open?<X size={25}/>:<Menu size={25}/>}</button>
      </div>
    </div></header>
  </>;
}

function Footer(){
  return <footer className="footer"><div className="shell">
    <div className="footer-upper"><div className="footer-brand"><Logo inverted /><p>Small discoveries. Big possibilities. Explore childcare options for infants through school-age children in Sand Springs.</p><SocialLinks dark /></div>
      <div className="footer-col"><h3>Explore</h3>{[...menu,{label:'Contact',href:'/contact' as Route}].map(link=><a key={link.href} href={link.href}>{link.label}</a>)}</div>
      <div className="footer-col"><h3>Find us</h3><a target="_blank" rel="noopener noreferrer" href={site.mapUrl}>{site.addressLine}<br/>{site.city}, {site.state} {site.zip}<ArrowUpRight size={14} className="inline-icon" /></a><a href={`tel:${site.phoneLink}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a></div>
      <div className="footer-col footer-hours"><h3>Center details</h3><p>Monday–Friday<br/><strong>7:30 AM – 5:30 PM</strong></p><p>Saturday & Sunday<br/><strong>Closed</strong></p><a href={site.officialListing} target="_blank" rel="noopener noreferrer">State childcare listing <ExternalLink size={13} className="inline-icon" /></a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}.</span><span>Sand Springs, OK · Oklahoma child care license {site.license}</span><a href="/contact">Say hello <ArrowUpRight size={13}/></a></div>
  </div></footer>;
}

function CallToAction({heading = 'Ready for the next little adventure?', simple = false}:{heading?:string;simple?:boolean}){
  return <section className={`cta-section ${simple?'cta-simple':''}`}><div className="shell cta-inner">
    <div className="cta-shape cta-shape-one" aria-hidden="true">✳</div><div className="cta-shape cta-shape-two" aria-hidden="true">✦</div>
    <div><Eyebrow light>LET'S CONNECT</Eyebrow><h2>{heading}</h2><p>Have questions about ages, availability, or getting started? Get in touch with Okie Kids Learning Academy.</p></div>
    <div className="cta-actions"><ButtonLink href="/contact">Contact the center</ButtonLink><a className="text-call" href={`tel:${site.phoneLink}`}><Phone size={18}/>{site.phone}</a></div>
  </div></section>;
}

function HomePage(){return <>
  <section className="home-hero"><div className="hero-grid-shell shell">
    <div className="hero-words"><div className="hero-kicker"><span className="kicker-star">✳</span> Hello, little explorers! <span className="hero-kicker-line" /></div>
      <h1>Little days.<br/><span className="hero-title-swing">Big <em>wonder.</em></span></h1>
      <p className="hero-lede">Every age has its own magic. Discover a place to explore childcare options from first steps to first school days, right here in Sand Springs.</p>
      <div className="hero-buttons"><ButtonLink href="/programs">Explore age groups</ButtonLink><a className="hero-secondary-link" href="/about">Meet Okie Kids <ArrowRight size={19}/></a></div>
      <div className="hero-footnote"><span className="smiley-face" aria-hidden="true">☺</span><span>Infants · Toddlers · Preschool · School-age</span></div>
    </div>
    <div className="hero-media"><div className="hero-blob-back" aria-hidden="true"/><div className="hero-sun" aria-hidden="true">✳</div><Photo photo="hero" className="hero-main-photo" eager />
      <div className="hero-small-photo"><Photo photo="secondary" /></div><div className="hero-memo"><span className="memo-heart">♥</span><span>Growing<br/>together!</span></div>
      <div className="hero-doodle" aria-hidden="true">↝</div>
    </div>
  </div><div className="hero-trim" aria-hidden="true"><span/><span/><span/><span/><span/></div></section>

  <section className="home-facts" aria-label="Key center information"><div className="shell facts-grid">
    <div className="fact-item"><IconCircle><Star size={24}/></IconCircle><div><strong>3-star program</strong><span>Oklahoma quality level</span></div></div>
    <div className="fact-item"><IconCircle><Clock3 size={24}/></IconCircle><div><strong>7:30 AM–5:30 PM</strong><span>Monday through Friday</span></div></div>
    <div className="fact-item"><IconCircle><HeartHandshake size={24}/></IconCircle><div><strong>Subsidy accepted</strong><span>As listed by Oklahoma DHS</span></div></div>
    <div className="fact-item"><IconCircle><MapPin size={24}/></IconCircle><div><strong>Sand Springs, OK</strong><span>Ages: infant to school-age</span></div></div>
  </div></section>

  <section className="section home-programs"><div className="shell"><div className="section-top row-between"><div><Eyebrow>SO MUCH TO DISCOVER</Eyebrow><h2>Every age.<br/><span className="highlight-coral">A new kind of magic.</span></h2></div><div className="section-side"><p>Different ages, different discoveries. Take a closer look at the age groups accepted at Okie Kids Learning Academy.</p><a className="under-link" href="/programs">See all age groups <ArrowUpRight size={17}/></a></div></div>
    <div className="program-card-grid">{programs.map((program,i)=><a className={`program-card program-color-${i}`} key={program.slug} href={`/programs#${program.slug}`}><div className="program-image"><Photo photo={program.photo} /><span className="photo-number">{program.number}</span></div><div className="program-info"><span className="program-age">{program.age}</span><h3>{program.title}</h3><p>{program.summary}</p><span className="program-more">Discover more <ArrowUpRight size={19}/></span></div></a>)}</div>
  </div></section>

  <section className="story-section"><div className="shell story-layout"><div className="story-visual"><div className="story-circle" aria-hidden="true"/><Photo photo="story" className="story-main-photo"/><span className="story-yellow-stamp">A place<br/>to grow <span>✳</span></span></div>
    <div className="story-text"><Eyebrow>OUR LITTLE CORNER OF OKLAHOMA</Eyebrow><h2>Big on the <span>little things.</span></h2><p>From first smiles to brand-new friendships, childhood moves quickly. Families deserve clear information and an easy way to find the right care for every stage.</p><p>Okie Kids Learning Academy is a licensed childcare center in Sand Springs serving infants, toddlers, preschoolers, and school-age children. Discover its age groups, opening hours, and how to connect with the team.</p><div className="story-stats"><div><strong>50</strong><span>licensed capacity</span></div><div><strong>4</strong><span>age groups listed</span></div></div><ButtonLink href="/about" dark>Get to know us</ButtonLink></div>
  </div></section>

  <section className="section values-section"><div className="shell"><div className="section-top centered"><Eyebrow>LITTLE MOMENTS, BIG IMPACT</Eyebrow><h2>A good question<br/>starts something great.</h2><p>As you explore childcare, these are some of the important things to talk about with any center.</p></div>
    <div className="values-grid"><article className="value-card"><span className="value-symbol"><Heart size={35}/></span><h3>Feeling at home</h3><p>Ask how caregivers help children settle in, build trust, and feel comfortable throughout the day.</p><span className="value-decoration" aria-hidden="true">01</span></article><article className="value-card"><span className="value-symbol"><Puzzle size={35}/></span><h3>Learning through play</h3><p>Find out how each age group is supported through exploration, language, movement, and creative activities.</p><span className="value-decoration" aria-hidden="true">02</span></article><article className="value-card"><span className="value-symbol"><MessageCircle size={35}/></span><h3>Staying connected</h3><p>Learn how the center shares updates, answers questions, and partners with families as children grow.</p><span className="value-decoration" aria-hidden="true">03</span></article></div>
  </div></section>

  <section className="mini-band"><div className="shell mini-band-inner"><div className="mini-band-mark" aria-hidden="true">☼</div><div><strong>Wondering about the first day?</strong><p>We've put together a helpful list of things to ask before enrolling.</p></div><a href="/parents">Parent information <ArrowUpRight size={19}/></a></div></section>
  <CallToAction />
</>}

function ProgramsPage(){return <>
  <section className="inner-hero programs-intro"><div className="shell inner-hero-grid"><div><Eyebrow>EVERY STAGE HAS A STORY</Eyebrow><h1>One big world.<br/><em>Four little chapters.</em></h1><p>From those earliest discoveries to the school years ahead, explore the age ranges listed for Okie Kids Learning Academy.</p><ButtonLink href="/contact">Ask about openings</ButtonLink></div><div className="inner-hero-art"><div className="inner-blob inner-blob-blue"/><Photo photo="play" className="inner-hero-photo"/><span className="inner-hero-spark">✱</span></div></div></section>
  <section className="section detailed-programs"><div className="shell"><div className="programs-intro-note"><div><IconCircle><Rainbow size={27}/></IconCircle><strong>Something new at every age</strong></div><p>These age ranges are from the Oklahoma childcare listing. Detailed classroom schedules and current availability should be confirmed directly with the center.</p></div>
   {programs.map((p,i)=><article className={`program-detail ${i%2===1?'program-detail-reverse':''}`} id={p.slug} key={p.slug}><div className="program-detail-media"><Photo photo={p.photo} /><span className="detail-photo-sticker">{p.number} / 04</span></div><div className="program-detail-copy"><span className="detail-index">{p.number} <span>—</span> {p.age}</span><h2>{p.title}<span className="detail-title-period">.</span></h2><p className="detail-summary">{p.summary}</p><p>{p.detail}</p><a className="under-link" href="/contact">Ask about {p.title.toLowerCase()} care <ArrowUpRight size={18}/></a></div></article>)}
  </div></section>
  <CallToAction heading="Questions about the right age group?" simple />
</>}

function AboutPage(){return <>
  <section className="inner-hero about-intro"><div className="shell inner-hero-grid"><div><Eyebrow>HELLO FROM SAND SPRINGS</Eyebrow><h1>Rooted here.<br/><em>Growing every day.</em></h1><p>Get to know Okie Kids Learning Academy, the age groups it welcomes, and the neighborhood it calls home.</p><ButtonLink href="/contact">Say hello</ButtonLink></div><div className="inner-hero-art"><div className="inner-blob inner-blob-yellow"/><Photo photo="room" className="inner-hero-photo"/><span className="inner-hero-spark">✱</span></div></div></section>
  <section className="section about-story-section"><div className="shell about-story-grid"><div><Eyebrow>OUR CENTER AT A GLANCE</Eyebrow><h2>Small details.<br/><em>Helpful answers.</em></h2><p>Located in Sand Springs, Okie Kids Learning Academy is listed as a licensed child care center offering year-round daytime care for infants through school-age children.</p><p>The Oklahoma Human Services profile lists a 3-star quality level and indicates that the program accepts child care subsidy assistance.</p><p>Have a specific question? Get in touch to ask about classroom routines, current openings, or visiting the center.</p><a className="under-link" href={site.officialListing} target="_blank" rel="noopener noreferrer">View the Oklahoma DHS listing <ExternalLink size={17}/></a></div><div className="about-fact-panel"><span className="panel-wink" aria-hidden="true">☺</span><div><strong>50</strong><span>licensed child capacity</span></div><hr/><div><strong>3<span>★</span></strong><span>Oklahoma star level</span></div><hr/><div><strong>4</strong><span>care age categories listed</span></div></div></div></section>
  <section className="section about-location"><div className="shell location-grid"><div className="location-photo-stack"><Photo photo="story" className="location-large"/><div className="location-flower" aria-hidden="true">✳</div></div><div><Eyebrow>RIGHT HERE IN OKLAHOMA</Eyebrow><h2>Part of the<br/><em>Sand Springs</em><br/>community.</h2><p>Find Okie Kids Learning Academy at {site.fullAddress}. The center lists weekday hours from 7:30 AM to 5:30 PM.</p><div className="location-link-box"><MapPin size={25}/><div><strong>{site.addressLine}</strong><span>{site.city}, {site.state} {site.zip}</span></div></div><ButtonLink external href={site.mapUrl}>Get directions</ButtonLink></div></div></section>
  <CallToAction heading="Get in touch. Start a conversation." simple />
</>}

function ParentsPage(){return <>
  <section className="inner-hero parents-intro"><div className="shell inner-hero-grid"><div><Eyebrow>FOR PARENTS & GROWN-UPS</Eyebrow><h1>The little things<br/><em>you want to know.</em></h1><p>Good questions help you find the right fit. Here's a simple starting point for exploring care at Okie Kids Learning Academy.</p><ButtonLink href="/contact">Ask a question</ButtonLink></div><div className="inner-hero-art"><div className="inner-blob inner-blob-coral"/><Photo photo="secondary" className="inner-hero-photo"/><span className="inner-hero-spark">✱</span></div></div></section>
  <section className="section parents-quick"><div className="shell"><div className="section-top"><Eyebrow>GOOD TO KNOW</Eyebrow><h2>Center info, <em>made simple.</em></h2></div><div className="parents-fact-grid">
      <article><Clock3 size={25}/><h3>Opening hours</h3><p>Monday through Friday<br/><strong>7:30 AM–5:30 PM</strong></p><span>Saturday & Sunday: Closed</span></article>
      <article><Baby size={25}/><h3>Ages listed</h3><p>Infants, toddlers, preschoolers, and school-age children.</p><a href="/programs">Explore age groups <ArrowUpRight size={15}/></a></article>
      <article><HeartHandshake size={25}/><h3>Subsidy participation</h3><p>Oklahoma DHS lists the center as accepting child care subsidies.</p><a href="https://okdhslive.org/" target="_blank" rel="noopener noreferrer">Oklahoma benefits portal <ExternalLink size={15}/></a></article>
    </div></div></section>
  <section className="section parents-questions"><div className="shell parents-questions-grid"><div><Eyebrow>A HELPFUL STARTING POINT</Eyebrow><h2>Before you enroll,<br/><em>ask away.</em></h2><p>Each center has its own policies. These questions can help you understand what a typical day might look like for your child.</p><Photo photo="play" className="questions-photo" /></div><div className="question-list">
    {[
      ['01', 'What does a typical day look like?', 'Ask about play, learning activities, snacks, meals, rest time, and age-specific routines.'],
      ['02', 'What should my child bring?', 'Confirm supplies, labeled clothing, diapers or wipes, and any required forms.'],
      ['03', 'How do you communicate with families?', 'Learn how daily updates, special announcements, and questions are handled.'],
      ['04', 'What are the enrollment steps?', 'Ask about current openings, fees, subsidy processing, and required paperwork.'],
      ['05', 'What are the drop-off and pick-up rules?', 'Confirm accepted arrival times, authorized pickups, and attendance policies.'],
    ].map(([n,q,a])=><article key={n} className="question-item"><span>{n}</span><div><h3>{q}</h3><p>{a}</p></div></article>)}
  </div></div></section>
  <section className="parents-note"><div className="shell parents-note-inner"><ShieldCheck size={40}/><div><h2>Want to check the official record?</h2><p>Oklahoma Human Services publishes the program's licensing details and public information. It's a helpful starting point when researching childcare options.</p></div><ButtonLink href={site.officialListing} external>View official listing</ButtonLink></div></section>
  <CallToAction heading="Your questions matter. Let's talk." simple />
</>}

const faqs = [
  ['Where is Okie Kids Learning Academy located?', `The listed address is ${site.fullAddress}. You can open directions on the Contact page.`],
  ['What ages does the center serve?', 'The Oklahoma Human Services listing includes infants (0–11 months), toddlers (12–23 months), preschoolers (2–4 years), and school-age children (5 years and older).'],
  ['What are the center’s hours?', 'Oklahoma Human Services lists Monday through Friday, 7:30 AM–5:30 PM. Saturday and Sunday are listed as closed. Call to confirm holiday schedules.'],
  ['Does Okie Kids accept childcare subsidies?', 'Yes. The Oklahoma Human Services provider listing identifies this center as accepting child care subsidy assistance. Contact the center and the state program to discuss your family’s eligibility and enrollment.'],
  ['Is the program licensed?', `The center is listed by Oklahoma Human Services under child care license ${site.license}. The state portal currently lists a 3-star program level and a capacity of 50 children.`],
  ['How can I ask about enrollment or tuition?', `Call ${site.phone} or email ${site.email}. Tuition rates and real-time openings are not published in the source record, so ask the center for current details.`],
  ['Is transportation available?', 'Transportation and school pickup arrangements are not confirmed in the state record. Contact the center to ask about availability, routes, and policies.'],
  ['How can I see more about the center?', 'You can visit the center’s Instagram and Facebook profiles linked below, or reach the team directly. The official Oklahoma Human Services record is also available online.'],
] as const;
function FaqPage(){return <>
  <section className="faq-head"><div className="shell faq-hero-grid"><div><Eyebrow>GOOD QUESTIONS, GREAT BEGINNINGS</Eyebrow><h1>Wondering<br/><em>about something?</em></h1><p>We’ve gathered the essentials. And if you still have questions, the team is just a call or message away.</p></div><div className="faq-big-mark" aria-hidden="true">?</div></div></section>
  <section className="section faq-section"><div className="shell faq-grid"><aside className="faq-aside"><Eyebrow>QUICK ANSWERS</Eyebrow><h2>Let's clear<br/>things up.</h2><p>Details on location, age groups, hours, and how to get in touch.</p><a href="/contact" className="under-link">Still curious? Contact us <ArrowUpRight size={18}/></a></aside><div className="accordion-list">{faqs.map(([question,answer],index)=><details className="faq-item" key={question} open={index===0?true:undefined}><summary><span className="faq-num">{String(index+1).padStart(2,'0')}</span><span className="faq-title">{question}</span><span className="faq-chevron"><ChevronDown size={20}/></span></summary><div className="faq-body"><p>{answer}</p></div></details>)}</div></div></section>
  <CallToAction heading="Still have questions? Say hello." simple />
</>}

function ContactPage(){return <>
  <section className="contact-hero"><div className="shell contact-hero-grid"><div><Eyebrow>LET'S SAY HELLO</Eyebrow><h1>We'd love to<br/><em>hear from you.</em></h1><p>Have a question about programs, visiting, or enrollment? Here are the best ways to connect with Okie Kids Learning Academy.</p><div className="contact-hero-deco" aria-hidden="true">✳ &nbsp; ✦ &nbsp; ☼</div></div><Photo photo="hero" className="contact-hero-photo" /></div></section>
  <section className="section contact-main"><div className="shell contact-main-grid"><div><Eyebrow>GET IN TOUCH</Eyebrow><h2>It's easy to<br/><em>reach out.</em></h2><p>Choose whatever works best for your family. Call, send a message, or get directions—whatever works best for your family.</p>
    <div className="contact-methods"><a href={`tel:${site.phoneLink}`}><IconCircle><Phone size={22}/></IconCircle><span><small>GIVE US A CALL</small><strong>{site.phone}</strong></span><ArrowUpRight size={19}/></a><a href={`mailto:${site.email}`}><IconCircle><Mail size={22}/></IconCircle><span><small>SEND AN EMAIL</small><strong>{site.email}</strong></span><ArrowUpRight size={19}/></a><a target="_blank" rel="noopener noreferrer" href={site.mapUrl}><IconCircle><MapPin size={22}/></IconCircle><span><small>COME FIND US</small><strong>{site.addressLine}<br/>{site.city}, {site.state} {site.zip}</strong></span><ArrowUpRight size={19}/></a></div>
    <div className="contact-social"><h3>Follow along</h3><p>Follow along and catch up with the academy online.</p><SocialLinks labeled /></div>
  </div><div className="contact-info-card"><div className="contact-info-top"><span>THE LITTLE DETAILS</span><Sun size={34}/></div><h3>Plan a visit.</h3><p>Check these essentials before heading over.</p><div className="card-hours"><div><span>Monday – Friday</span><strong>7:30 AM – 5:30 PM</strong></div><div><span>Saturday – Sunday</span><strong>Closed</strong></div></div><div className="contact-card-small"><span>License</span><strong>{site.license}</strong></div><a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="card-map-link">Get directions <ArrowUpRight size={20}/></a><span className="card-petal" aria-hidden="true">✿</span></div></div></section>
  <section className="contact-map-bar"><div className="shell contact-map-bar-inner"><span className="contact-pin" aria-hidden="true"><MapPin size={28}/></span><div><strong>{site.fullAddress}</strong><p>Sand Springs, Tulsa County, Oklahoma</p></div><a href={site.officialListing} target="_blank" rel="noopener noreferrer">View state license details <ExternalLink size={16}/></a></div></section>
</>}

export function App({route}:{route:Route}) {
  const page: React.ReactNode = route==='/'?<HomePage/> : route==='/programs'?<ProgramsPage/> : route==='/about'?<AboutPage/> : route==='/parents'?<ParentsPage/> : route==='/faq'?<FaqPage/> : <ContactPage/>;
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header route={route}/><main id="main-content">{page}</main><Footer/></>;
}
