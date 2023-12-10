import Image from "next/image";

export default function DataList() {
  return (
      <div className="relative flex row border-black border-b border-dashed w-[1050px] pb-[41.5px] mt-[20.5px] ml-[35.5px] font-['Gsans']">
        {/* 임시 이미지 */}
        {/* 데이터베이스에서 가져온 이미지로 변경 요망 */}
        <div className="flex flex-row">

          <div className="w-[108px] h-[127px] bg-gray-300 mr-[13px]"/>

          <div className="flex flex-col">

            {/* 데이터베이스에서 가져온 교재 이름 */}
            <p className="text-[15px]">지이다 영어교실</p>
            <div className="flex items-center">
              {/* 데이터베이스에서 가져온 제목 */}
              <p className="text-[18px] font-bold mr-[11.9px]">[2015개정] 내신 1등급 도전 단계별 변형문제</p>
              <Image src="/ratingStar.png" width={16.36} height={15.56}/>
              {/* 데이터베이스에서 가져온 평점 */}
              <p className="ml-[2.7px] text-[13px] text-gray-400">4.0 (20)</p>
            </div>

              <div className="text-[13px] flex ml-[1px]">
                <p style={{borderColor: 'blue', color: 'blue'}} className="border rounded-full px-[7px] py-[3px] inline-flex text-center">무료</p>
                <p style={{borderColor: 'blue', color: 'blue'}} className="border rounded-full px-[7px] py-[3px] inline-flex text-center ml-[5px]">자료</p>
                <p className="border rounded-full px-[7px] py-[3px] inline-flex text-center ml-[5px]">고1</p>
                <p className="border rounded-full px-[7px] py-[3px] inline-flex text-center ml-[5px]">영어</p>
                <p className="border rounded-full px-[7px] py-[3px] inline-flex text-center ml-[5px]">능출김</p>
                <p className="border rounded-full px-[7px] py-[3px] inline-flex text-center ml-[5px]">5과</p>
                <p className="border rounded-full px-[7px] py-[3px] inline-flex text-center ml-[5px]">변형문제</p>
                <p className="border rounded-full px-[7px] py-[3px] inline-flex text-center ml-[5px]">단계별학습</p>
              </div>

              <hr className="my-[8px] w-[843px]"/>

              <div className="flex-col">
                <div className="w-fit items-center border rounded-full text-[14px] mr-[10px] py-[3px] px-[12px] inline-flex">
                  <p className="text-center">개념 및 이론이 정확해요</p>
                  <div className="border-r h-full ml-[4px] mr-[7.5px] inline-flex"></div>
                    <p style={{ color: 'red'}} className="text-center">10</p>
                  </div>
                  <div className="w-fit items-center border rounded-full text-[14px] mr-[10px] py-[3px] px-[12px] inline-flex">
                    <p className="text-center">가격이 저렴해요</p>
                    <div className="border-r h-full ml-[4px] mr-[7.5px] inline-flex"></div>
                    <p style={{ color: 'red'}} className="text-center">5</p>
                  </div>
                  <div className="w-fit items-center border rounded-full text-[14px] mr-[10px] py-[3px] px-[12px] inline-flex">
                    <p className="text-center">믿을만한 자료에요</p>
                    <div className="border-r h-full ml-[4px] mr-[7.5px] inline-flex"></div>
                    <p style={{ color: 'red'}} className="text-center">3</p>
                  </div>
                </div>
              </div>

            </div>
            <button className=
            "ml-[1px] rounded-full bg-blue h-fit w-fit px-3.5 py-1 text-white font-['PretendardMedium'] mt-9">방문하기</button>
          </div>
    )
}
