export default function Search() {
  return (
    <div>
      <h3 className="mt-[41px] ml-[35.5px] text-3xl font-GmarketSans">
        2. 자료검색
      </h3>
      <h className="ml-[763.5px] mt-[44px] text-[13px]">Home &gt; 고등내신 &gt; 과목선택 &gt; 자료검색</h>
      <div style={{ position: "relative" }} className="group">
        <img
          src="/searchimage.png"
          className="absolute w-[82.44px] h-[99.53px] mt-[39px] ml-[31.5px] z-10"
        />
        <input
          type="text"
          id="text-input"
          name="text-input"
          className="bg-white border border-black transition-all duration-500 ease-in-out hover:w-[593px] pl-20 absolute 
                                h-[54px] w-[656px] mt-[64px] ml-[52.5px] rounded-full shadow-xl"
          placeholder="자료 필요하면 500원~"
        />
        <button className="absolute w-6 h-6 ml-[655.5px] mt-[78px] transition-all duration-500 ease-in-out transform group-hover:translate-x-[-63px]">
          <img src="search.png" alt="Search" />
        </button>
      </div>
    </div>
  )
}