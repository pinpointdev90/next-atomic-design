import { FlatListProps } from './types'
import FlexColumn from '../FlexColumn'

const FlatList = <TData,>({ 
  data, 
  keyExtractor, 
  renderItem, 
  onPressItem 
}: FlatListProps<TData>) =>
    <FlexColumn gap={20}>
      {data.map((item, index) => 
        <FlexColumn onClick={() => onPressItem?.(item)} key={keyExtractor(item)}>
          {renderItem(item, index)}
        </FlexColumn>
      )}
    </FlexColumn>

export default FlatList