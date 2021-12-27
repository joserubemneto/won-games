import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};

    > button {
      margin-top: ${theme.spacings.xsmall};
    }

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacings.xlarge};

      > button {
        justify-self: end;
        grid-column: 2;
        margin-top: 0;
      }
    `}
  `}
`
