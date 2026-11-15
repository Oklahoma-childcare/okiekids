/**
 * SINGLE PLACE TO CHANGE EVERY PHOTO.
 * Option A: paste another licensed image URL in src.
 * Option B: upload a JPG/PNG to public/images (e.g. public/images/hero.jpg)
 *           and change src to '/images/hero.jpg'.
 * These are illustrative Pexels stock photographs, NOT photos of the actual academy.
 * Keep the source/credit for asset license provenance.
 */
export type Photo = { src: string; alt: string; position?: string; credit: string; sourcePage: string };
export const photos: Record<string, Photo> = {
  hero: {
    src: 'https://images.pexels.com/photos/8535234/pexels-photo-8535234.jpeg?auto=compress&cs=tinysrgb&w=1700',
    alt: 'Preschool children sharing an activity with an educator',
    position: 'center 44%',
    credit: 'Ksenia Chernaya / Pexels',
    sourcePage: 'https://www.pexels.com/photo/kids-holding-colorful-balls-while-listening-to-their-teacher-8535234/',
  },
  secondary: {
    src: 'https://images.pexels.com/photos/8612970/pexels-photo-8612970.jpeg?auto=compress&cs=tinysrgb&w=850',
    alt: 'Children playing together with wooden blocks',
    position: 'center 47%',
    credit: 'Yan Krukau / Pexels',
    sourcePage: 'https://www.pexels.com/photo/two-boys-playing-with-wooden-blocks-in-a-room-8612970/',
  },
  infants: {
    src: 'https://images.pexels.com/photos/8363750/pexels-photo-8363750.jpeg?auto=compress&cs=tinysrgb&w=950',
    alt: 'Young child exploring toys during playtime',
    position: 'center 43%',
    credit: 'RDNE Stock project / Pexels',
    sourcePage: 'https://www.pexels.com/photo/a-kid-playing-inside-the-classroom-8363750/',
  },
  toddlers: {
    src: 'https://images.pexels.com/photos/8535193/pexels-photo-8535193.jpeg?auto=compress&cs=tinysrgb&w=950',
    alt: 'Young children stacking colorful wooden toys',
    position: 'center 45%',
    credit: 'Ksenia Chernaya / Pexels',
    sourcePage: 'https://www.pexels.com/photo/children-playing-with-colorful-wooden-blocks-8535193/',
  },
  preschool: {
    src: 'https://images.pexels.com/photos/8535232/pexels-photo-8535232.jpeg?auto=compress&cs=tinysrgb&w=950',
    alt: 'Children learning together at preschool',
    position: 'center 44%',
    credit: 'Ksenia Chernaya / Pexels',
    sourcePage: 'https://www.pexels.com/photo/kids-playing-with-educational-toys-in-school-8535232/',
  },
  schoolage: {
    src: 'https://images.pexels.com/photos/8923527/pexels-photo-8923527.jpeg?auto=compress&cs=tinysrgb&w=950',
    alt: 'School-age student exploring classroom materials',
    position: 'center 47%',
    credit: 'Mikhail Nilov / Pexels',
    sourcePage: 'https://www.pexels.com/photo/a-girl-in-the-classroom-8923527/',
  },
  story: {
    src: 'https://images.pexels.com/photos/8363047/pexels-photo-8363047.jpeg?auto=compress&cs=tinysrgb&w=1250',
    alt: 'Children discovering toys and learning materials',
    position: 'center 42%',
    credit: 'RDNE Stock project / Pexels',
    sourcePage: 'https://www.pexels.com/photo/children-playing-with-their-toys-inside-the-school-8363047/',
  },
  play: {
    src: 'https://images.pexels.com/photos/6692953/pexels-photo-6692953.jpeg?auto=compress&cs=tinysrgb&w=1050',
    alt: 'Brightly colored early learning toys',
    position: 'center 48%',
    credit: 'Tara Winstead / Pexels',
    sourcePage: 'https://www.pexels.com/photo/a-kid-playing-the-colorful-wooden-toys-in-the-box-6692953/',
  },
  room: {
    src: 'https://images.pexels.com/photos/8535156/pexels-photo-8535156.jpeg?auto=compress&cs=tinysrgb&w=1300',
    alt: 'Warm and inviting early-childhood playroom',
    position: 'center 54%',
    credit: 'Ksenia Chernaya / Pexels',
    sourcePage: 'https://www.pexels.com/photo/kids-playroom-with-wooden-tables-and-bunk-bed-8535156/',
  },
};
