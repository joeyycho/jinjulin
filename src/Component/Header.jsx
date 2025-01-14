import React from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import Egg from './Egg'

const Header = () => {
    const [showModal, setShowModal] = React.useState(false)

    // 아이콘 클릭 시 모달 토글
    const toggleModal = () => {
        setShowModal(prevState => !prevState)
    }

    return (
        <>
            <Wrapper>
                <EasterEgg>
                    <Egg />
                </EasterEgg>
                <Logo onClick={() => window.location.href = '/'}></Logo>
                <IconWrapper onClick={toggleModal}>
                    <Icon className={showModal ? 'active' : ''} />
                </IconWrapper>
            </Wrapper>
            <Modal isOpen={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #e0e0e0;
    background-color: #ffffff;
    color: #19AC48;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
`

const IconWrapper = styled.div`
    width: 22px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 10;
`

const Icon = styled.div`
    width: 22px;
    height: 2.5px;
    background-color: #19AC48;
    position: relative;
    transition: all 0.3s ease-in-out;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 22px;
        height: 2.5px;
        background-color: #19AC48;
        transition: all 0.3s ease-in-out;
    }

    &::before {
        top: -10px;
        left: 0;
    }

    &::after {
        top: 10px;
        left: 0;
    }

    &.active {
        background-color: transparent;
    }

    &.active::before {
        top: 0;
        transform: rotate(45deg);
    }

    &.active::after {
        top: 0;
        transform: rotate(-45deg);
    }
`
const Logo = styled.div`
    font-size: 20px;
    font-weight: bold;
    `;

    const EasterEgg = styled.div``;