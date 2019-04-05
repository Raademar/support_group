import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const ImageStyle = styled.div`
        width: ${props => props.width || '80%'};
        font-weight: ${props => props.fontWeight || 'bold'};
`

const Image = props => {
    console.log(props.Image)
    return (
        <ImageStyle>
            <img src={props.Image} />
        </ImageStyle>
    )
}
export default Image