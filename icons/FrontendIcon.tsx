import {forwardRef} from 'react'

/**
 * @public
 */
export const FrontendIcon = forwardRef(function FrontendIcon(
    props: React.SVGProps<SVGSVGElement>,
    ref: React.Ref<SVGSVGElement>
) {
    return (
        <svg
            data-sanity-icon="frontend"
            width="1em"
            height="1em"
            viewBox="0 0 26 26"
            stroke="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            {...props}
        >
            <path d="M23.8804 13.0019L12.342 24.5403L6.66712 18.8655L18.2056 7.32705L23.8804 13.0019Z" fill="currentColor" opacity={ 0.75 }/>
            <path d="M18.2483 7.36977L6.70985 18.9082L0.803225 13.0016L12.3417 1.46315L18.2483 7.36977Z" fill="currentColor" opacity={ 1 }/>
            <path d="M25.2402 2.16331L2.16331 25.2402L0.240234 23.3172L23.3172 0.240234L25.2402 2.16331Z" fill="currentColor" opacity={ 0.5 }/>
        </svg>
    )
})



