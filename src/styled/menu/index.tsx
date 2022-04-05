import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SOverlayMenu = styled(motion.main)<{ colors: string[] }>`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    background: radial-gradient(${(props) => props.colors.join()});
`
