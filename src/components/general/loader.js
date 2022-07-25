import tw, { styled } from "twin.macro";
const MainGroup = tw.div`flex justify-center items-center`;
const FirstBouncing = styled.div(({ hasCircle }) => [
    tw`mr-1 animate-bounce`,
    hasCircle && tw`h-2.5 w-2.5 rounded-full bg-blue-600 mb-8`
]);

const SecondBouncing = styled.div(({ hasCircle }) => [
    tw`mr-1 animate-bounce200`,
    hasCircle && tw`h-2.5 w-2.5 rounded-full bg-blue-600 mb-8`
])

const ThirdBouncing = styled.div(({ hasCircle }) => [
    tw`mr-1 animate-bounce400`,
    hasCircle && tw`h-2.5 w-2.5 rounded-full bg-blue-600 mb-8`
])
const Loader = () => {

    return(
        <>
            <MainGroup>
                <FirstBouncing hasCircle />
                <SecondBouncing hasCircle />
                <ThirdBouncing hasCircle />
            {/* <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
                <div
                    className={`${circleCommonClasses} mr-1 animate-bounce200`}
                ></div>
                <div className={`${circleCommonClasses} animate-bounce400`}></div> */}
            </MainGroup>
        </>
    )
}
export default Loader;