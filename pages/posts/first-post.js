import Link from 'next/link';


export default function FirstPost() {
    return (
        <>
            <h1>Post page</h1>
            <Link href="/">
                <a>Go back</a>
            </Link>
        </>
    )
}

