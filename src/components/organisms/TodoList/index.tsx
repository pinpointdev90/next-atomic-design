import { ListComponentProps } from './types'
import { FlatList, FlexColumn, Scroll } from '@/components/atoms'

const ListComponent = <TData,>({ ...flatListProps }: ListComponentProps<TData>) => 
  <FlexColumn>
    <Scroll>
      <FlatList {...flatListProps}/>
    </Scroll>
  </FlexColumn>

export default ListComponent