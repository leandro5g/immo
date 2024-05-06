import { Banner, ContainerBanner } from './banner-immobile.styles'

const BannerImmobile: React.FC = () => {
  return (
    <ContainerBanner>
      <Banner
        source={{
          uri: 'https://www.construtoraplaneta.com.br/wp-content/uploads/2022/11/127JPG-2-scaled.jpg',
        }}
      />
    </ContainerBanner>
  )
}

export { BannerImmobile }
