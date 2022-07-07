import styled from 'styled-components'

interface ImgProps {
  width: number
  aspectRatio: number
}
export const Img = styled.img<ImgProps>`
  display: flex;
  width: ${(props) => props.width}px;
  aspect-ratio: ${(props) => props.aspectRatio};
`
