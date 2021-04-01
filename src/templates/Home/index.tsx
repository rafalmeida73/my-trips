import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Rafael's Trips"
        description="A simple project starter to show my favorites trips in the world"
        // canonical="https:"
        openGraph={{
          url: 'https://my-trips.willianjusten.com.br',
          title: 'Rafaels trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips.willianjusten.com.br/img/icon-512.png',
              width: 1280,
              height: 720,
              alt: 'Rafaels trips'
            }
          ],
          site_name: 'Rafaels trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} arial-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
