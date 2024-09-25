export interface FlatListProps<TData> {
  data: TData[]
  keyExtractor: (data: TData) => string | number
  renderItem: (data: TData, index: number) => React.ReactNode | React.ReactNode []
  onPressItem?: (data: TData) => void 
}