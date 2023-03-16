import styled from 'styled-components'

import { CENTER, theme } from 'styles/themes'

export const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  ${CENTER}
  background: ${theme.colors.grey};
`

export const ErrorTitle = styled.h1`
  ${theme.typography.EB_HEADLINE_1}
  color: ${theme.colors.primary};
`
