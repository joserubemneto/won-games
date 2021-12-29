import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Link from 'next/link'

import * as S from './styles'

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { FavoriteBorder } from '@styled-icons/material-outlined/FavoriteBorder'
import { Favorite } from '@styled-icons/material-outlined/Favorite'
import formatPrice from 'utils/format-price'

export type GameCardProps = {
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  ribbon?: string
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
  onFav?: () => void
}

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbonColor,
  ribbonSize,
  ribbon,
  onFav
}: GameCardProps) => (
  <S.Wrapper>
    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <Button size="small" icon={<AddShoppingCart />} />
      </S.BuyBox>
    </S.Content>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
  </S.Wrapper>
)

export default GameCard
