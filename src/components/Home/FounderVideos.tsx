import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export function FounderVideos() {
  const youtubeVideos = [
    {
      id: 'video1',
      embedUrl: 'https://www.youtube.com/embed/q-VrxxMswHM?si=etO4NqrszKaOSkPd',
      title: "ACE Group Story Explained | How ACE Built a Real Estate Empire in Noida",
    },
    {
      id: 'video2',
      embedUrl: 'https://www.youtube.com/embed/nY41NAsGgq4?si=hw55jhgCZOqugBHV',
      title: 'Jewar Airport Near Oasis Grandstand | Yamuna Expressway Real Estate Investment Explained',
    },
    {
      id: 'video3',
      embedUrl: 'https://www.youtube.com/embed/qco8EOQOG0c?si=AegGPOWvhfS-1RXm',
      title: 'Bhutani Group Controversy | Facts vs Allegations | Commercial Real Estate',
    },
    {
      id: 'video4',
      embedUrl: 'https://www.youtube.com/embed/nFpmpt7MeCI?si=kXwjvhpRQJXh1eN9',
      title: 'Orris Group Under Fire | Delays, Dues & the Real Estate Reality Check',
    },
    {
      id: 'video5',
      embedUrl: 'https://www.youtube.com/embed/Wb4tgfPdUBU?si=QlOB5ruY7ndqgJ1V',
      title: 'Freehold vs Leasehold Explained | Biggest Property Mistake Flat Buyers Make',
    },
  ];

  return (
    <section id="founder-videos" className="py-3 md:py-6 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 font-headline text-accent">
          From Our Founder's Desk
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Gain insights and expert advice directly from our founder on the latest trends in the real estate market.
        </p>
        <div className="px-16">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {youtubeVideos.map((video) => (
                <CarouselItem key={video.id} className="md:basis-1/3 sm:basis-1/2">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <div className="aspect-video">
                        <iframe
                          src={video.embedUrl}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold font-headline truncate">{video.title}</h3>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
