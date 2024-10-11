//Hello는 클릭하면 얼럿을 나타내는 텍스트를 반환한다.
const Hello = () => {
    //클릭시 호출되는 함수
    const onClink = () => {
        //얼럿을 나타낸다.
        alert('hello')
    }

    const text = 'Hello, React'

    //텍스트를 자식으로 갖는 div 요소를 반환한다.
    return (
        // div의 onClink에 클릭 시의 콜백 함수를 반환한다.
        <div onClick={onClink}>
            {text}
        </div>
    )
}

//외부로부터 Hello를 읽을 수 있도록 익스포트 한다.
export default Hello