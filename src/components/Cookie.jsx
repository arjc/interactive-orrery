import cookie from '/transparent/diabeto.webp'
import omg from '/transparent/omg.webp'

const Cookie = () => {
    return (
        <div className="w-full flex p-5 justify-between flex-col gap-5 md:flex-row">
            <div className="flex gap-3 items-center">
                <img src={cookie} alt="Round tasty Cookie" className="h-20 roll" />
                <div>
                    <h1 className="text-2xl font-mono tracking-[0.7ch]">Cookies</h1>
                    <p>I dont have any cookies. Hope you are not hungry</p>
                </div>
            </div>
            <div className="flex gap-3 items-center text-right">
                <div>
                    <h1 className="text-2xl font-mono tracking-[0.7ch]">Privacy</h1>
                    <p>Your activity is private and nobody can steal you data here</p>
                </div>
                <img src={omg} alt="OMG Emoji" className="h-20 anti-roll grayscale-70" />
            </div>
        </div>
    )
}

export default Cookie