export default function LoadMoreBtn({onClick}) {
    return (<>
        <button
            onClick={onClick}
            className='loadBtn'>
            Load more...
        </button>
    </>)
}