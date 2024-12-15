export default function Card() {
    return (
        <div className="p-[8rem] h-auto flex flex-col items-center bg-red-200 m-[4rem] shadow-lg aspect-[3/4]">
            <div className="imageWrapper w-auto h-auto">
                <img src="./dummy.webp" alt="dummy.webp" className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start self-start">
                <p>Description of Image</p>
                <div className="flex flex-row">
                    <p>1枚</p>
                    <p>7.3%</p>
                </div>
            </div>
        </div>
    );
}