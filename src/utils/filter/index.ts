import { FilterType, ItemProps } from 'components/ExploreSidebar'
import { ParsedUrlQueryInput } from 'querystring'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

const isCheckbox = (type: string | undefined) => type === FilterType.CHECKBOX

export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      const item = filterItems?.find((item) => item.name === key)

      obj[key] = !isCheckbox(item?.type)
        ? queryString[key]
        : { name_contains: queryString[key] }
    })

  return obj
}

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key)
    const isArray = Array.isArray(queryString[key])

    obj[key] =
      !isArray && isCheckbox(item?.type) ? [queryString[key]] : queryString[key]
  })

  return obj
}
