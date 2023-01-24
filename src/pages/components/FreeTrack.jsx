export const FreeTrack = (args) => {
    return (
        <>
        <h2>Track</h2>
        <p>{args.trackname ? args.trackname : "Trackname niet gevonden"}</p>
        <a href={args.link ? args.link : `https://soundcloud.com/ryverbe`} target="_blank">Download</a>

        </>
    )
};