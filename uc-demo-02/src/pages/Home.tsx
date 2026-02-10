import HeroSection from '../components/sections/HeroSection';
import ServiceCardsSection from '../components/sections/ServiceCardsSection';
import IndustryGridSection from '../components/sections/IndustryGridSection';
import CtaBannerSection from '../components/sections/CtaBannerSection';
import ContactCardSection from '../components/sections/ContactCardSection';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <HeroSection
        heading="Vi er IT-konsulenter"
        body="og det er vi stolte av! Vi har solid kompetanse, god erfaring og utfører godt håndverk. Nå ser vi etter flere utviklere som har lyst å utvikle selskapet sammen med oss. Ulriken er 100% eid av de ansatte og holder til i Bergen."
        ctaText="Bli kjent med Ulriken"
        ctaLink="/om-oss"
        imageSrc="/images/Illustrasjonseksempel.svg"
        imageAlt="Ulriken illustrasjon"
      />

      {/* Services */}
      <ServiceCardsSection
        heading="Vi tør kalle oss eksperter."
        description="Teknologi er noe vi behersker, og vi er å regne som de fremste på våre fagområder"
        services={[
          { icon: '/images/Group-9741.svg', label: 'Business Intelligence & maskinlæring' },
          { icon: '/images/Group-9742.svg', label: 'Fullstack utvikling' },
          { icon: '/images/Group-9750.svg', label: 'Apputvikling' },
          { icon: '/images/Frame-9745.svg', label: 'Skybasert arkitektur & sikkerhet' },
          { icon: '/images/Group-9748.svg', label: 'Prosjektledelse & rådgiving' },
        ]}
      />

      {/* Industry grid */}
      <IndustryGridSection
        heading="Vi har bred prosjekterfaring"
        intro="Bred bransjeerfaring kommer våre kunder til gode. Fagmiljøet i Ulriken har i mer enn 20 år vært en viktig samarbeidspartner for våre kunder i mange forskjellige bransjer."
        industries={[
          { title: 'Helsesektoren', description: 'Pasientsikkerhet og brukervennlighet for helsepersonell er viktige faktorer når vi bygger systemer for Folkehelseinstituttet, Helsedirektoratet og Helse Vest.' },
          { title: 'Bank og finans', description: 'Vi har i en årrekke være leverandør innen mobilbank, sikkerhet og BI, blant annet for Sparebanken Vest, DNB, Nordea Liv og Kreditorforeningen.' },
          { title: 'Bemanning', description: 'Vi bygger smartere verktøy som ivaretar hele næringskjeden til våre kunder Adecco, Dedicare og Personalhuset.' },
          { title: 'Shipping og offshore', description: 'Vi utvikler analyseverktøy og simulatorer som effektiviserer flåten og reduserer utslipp. Vi bistår blant annet Odfjell SE med løsninger som innfrir morgensdagens klimakrav.' },
          { title: 'Mediebransjen', description: 'Våre utviklere har spesialistkompetanse som er etterspurt når medieaktører som TV2 og Vimond skal realisere nye medieplattformer.' },
        ]}
      />

      {/* CTA banner */}
      <CtaBannerSection
        heading="Vi er alltid på jakt etter dyktige fagfolk"
        body="Interessante oppgaver og hyggelige kollegaer i Ulriken venter den som tar initiativ."
        ctaText="Jeg vil vite mer..."
        ctaLink="/kontakt"
      />

      {/* Contact cards */}
      <ContactCardSection
        heading="Mye bra har startet med en kopp kaffe."
        description="Er du nysgjerrig på Ulriken som arbeidplass eller trenger en sterk samarbeidspartner på tech?"
        people={[
          {
            name: 'Hans-Martin Zeil',
            profileLink: '/folkene/hans-martin-zeil',
            title: 'Daglig leder',
            imageSrc: '/images/Hans-Martin-Zeil_2024-01-12-003251_mhvf.webp',
            email: 'hansmz@uc.no',
            phone: '91105199',
          },
          {
            name: 'Olav Kindt',
            profileLink: '/folkene/olav-kindt',
            title: 'Konsulentleder',
            imageSrc: '/images/Olav-Kindt_2024-01-11-142756_thxx.webp',
            email: 'olavk@uc.no',
            phone: '47293990',
          },
          {
            name: 'Endre Mølster Lidal',
            profileLink: '/folkene/endre-molster-lidal',
            title: 'Konsulentleder (Ph.d.)',
            imageSrc: '/images/Endre-Mølster-Lidal_2024-11-05-001514_mphq.webp',
            email: 'eml@uc.no',
            phone: '95108899',
          },
        ]}
      />
    </main>
  );
}
