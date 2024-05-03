
import { TabFilterItem } from './modules/tab-filter-item/tab-filter-item.module';
import { Container } from './tab-filter.styles';

const TabFilter: React.FC = () => {
  return(
    <Container>
      <TabFilterItem isSelected={true} />
      <TabFilterItem isSelected={false} />
      <TabFilterItem isSelected={false} />
      <TabFilterItem isSelected={false} />
      <TabFilterItem isSelected={false} />
    </Container>
  )
}

export { TabFilter }