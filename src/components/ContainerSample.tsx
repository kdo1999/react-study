import React from 'react';

// Container의 props 타입을 지정한다.

type ContainerProps = {
    title: string
    children: React.ReactNode
}

const Container = (props: ContainerProps): JSX.Element => {
    const { title, children } = props
    
    return (
        <div style={{ background: 'red' }}>
            <span>{title}</span>
            {/* props인 children을 삽입하면, 이 컴포넌트의 시작 태그와 종료 태그로 감싼 요소를 표시한다. */}
            <div>{children}</div>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return (
        // Container를 사용할 때, 다른 요소를 감싸서 사용한다.
        <Container title="Hello">
           <p>이 부분이 배경색으로 둘러싸여 있습니다.</p> 
        </Container>
    )
}

export default Parent