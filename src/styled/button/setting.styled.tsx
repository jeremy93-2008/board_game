import styled from 'styled-components'

export const Setting = styled.section<{ color: string }>`
    color: white;
    box-sizing: border-box;
    background-color: ${(props) => props.color};
    overflow: hidden;
    &:hover {
        color: #444;
    }
    & .text {
        position: relative;
        z-index: 6;
    }

    &:after {
        position: absolute;
        z-index: 4;
        content: '';
        top: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        transform: translateX(-110%) translateY(-25%) rotate(-45deg);
        transform-origin: 0 0;
        transition: transform 0.2s ease-in-out;
    }

    &:hover::after {
        transform: translateY(0) rotate(0);
    }
`
