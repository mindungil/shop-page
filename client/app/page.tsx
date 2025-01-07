import Header from "./component/header/header";
import Image from "next/image";
import main from "@/public/main.jpg"
import Slide from "./util/slide";
// import Carousel from "./util/carousel";

export default function Page() {
    return (
        <div className="page">
            <Header/>
            <div style={{ position: 'relative', width: '100vw', height: '75vh' }}>
            <Image
                src={main}
                alt="image-main"
                layout="fill"
                priority={true} // 초기 로딩 시 우선 로드
            />
            </div>

            <p style={{justifyContent: "center"}}>쇼핑몰 페이지 입니다.</p>
            <Slide/>
        </div>
    )
}