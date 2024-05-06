
import { Container, TextTabItem } from './tab-filter-item.styles';

const TabFilterItem: React.FC<{ isSelected: boolean }> = ({ isSelected }) => {
  return  (
    <Container isSelected={isSelected}>
      <TextTabItem isSelected={isSelected} size='x12' font={isSelected ? "SEMI_BOLD" : "REGULAR"}>
        Popular
      </TextTabItem>
    </Container>
  )
}

export { TabFilterItem }