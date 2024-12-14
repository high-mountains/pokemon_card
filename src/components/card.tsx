export default function Card() {
    return (
        <div className="flex flex-col items-center">
            <div className="imageWrapper w-[50rem] h-[75rem]">
                <img src="./dummy.webp" alt="dummy.webp" className="w-full h-full"/>
            </div>
            <p>Description of Image</p>
        </div>
    );
}