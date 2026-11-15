export type Route = '/' | '/programs' | '/about' | '/parents' | '/faq' | '/contact';
export const routes: Route[] = ['/', '/programs', '/about', '/parents', '/faq', '/contact'];
export const metadata: Record<Route, {title: string; description: string}> = {
  '/': {
    title: 'Okie Kids Learning Academy | Childcare in Sand Springs, OK',
    description: 'Explore Okie Kids Learning Academy in Sand Springs, OK. Childcare for infants, toddlers, preschoolers and school-age children. View hours, programs and contact information.',
  },
  '/programs': {
    title: 'Infant, Toddler, Preschool & School-Age Care | Okie Kids',
    description: 'See the age groups accepted at Okie Kids Learning Academy, a licensed child care center in Sand Springs, Oklahoma. Learn about infant, toddler, preschool and school-age care.',
  },
  '/about': {
    title: 'About Okie Kids Learning Academy | Sand Springs, OK',
    description: 'Get to know Okie Kids Learning Academy in Sand Springs. Find publicly listed program information, state license details, hours and contact information.',
  },
  '/parents': {
    title: 'Information for Parents | Okie Kids Learning Academy',
    description: 'Helpful information for families interested in Okie Kids Learning Academy in Sand Springs, including hours, subsidy participation and suggested questions to ask.',
  },
  '/faq': {
    title: 'Frequently Asked Questions | Okie Kids Learning Academy',
    description: 'Answers to questions about Okie Kids Learning Academy in Sand Springs: ages, hours, Oklahoma subsidies, capacity, location and reaching the center.',
  },
  '/contact': {
    title: 'Contact Okie Kids Learning Academy | Sand Springs, OK',
    description: 'Find Okie Kids Learning Academy at 3720 S. 113th W. Ave, Sand Springs, OK 74063. Call (661) 675-7614 or email the center.',
  },
};
