import styled from 'styled-components'

export const Menu = styled.section<{ color: string; order?: 'even' | 'odd' }>`
    color: white;
    box-sizing: border-box;
    background-color: ${(props) => props.color};
    overflow: hidden;
    transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
    -webkit-backface-visibility: hidden;

    &:hover {
        color: #444;
        transform: ${(props) =>
            props.order == 'even' ? 'rotateZ(2deg)' : 'rotateZ(-2deg)'};
    }
    & .text {
        position: relative;
        z-index: 6;
    }

    &:active {
        transform: scale(0.8) rotateZ(2deg);
    }

    &:after {
        position: absolute;
        z-index: 4;
        content: '';
        top: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        transform: translateX(-25%) translateY(-25%) rotate(-45deg);
        transform-origin: 0 0;
        transition: transform 0.2s ease-in-out;
    }

    &:hover:after {
        transform: translateY(0) rotate(0);
    }
`
