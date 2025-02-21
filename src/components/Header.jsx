export default function Header() {
  return (
    <div className="flex justify-between items-center p-10 bg-black text-white">
      <h2 className="font-bold text-2xl">OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-5">
        <li className="font-normal text-sm cursor-pointer">로그인</li>
        <li className="font-normal text-sm cursor-pointer">회원가입</li>
        <li className="font-normal text-sm cursor-pointer">내클래스</li>
      </ul>
    </div>
  );
}