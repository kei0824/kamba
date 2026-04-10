export default function FooterJa() {
  return (
    <footer className="border-t border-[#C9BCEE] py-8 bg-[#F8F7FC]">
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[12px] text-[#9CA3AF]">
          &copy; {new Date().getFullYear()} Kamba. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-[12px] text-[#9CA3AF] hover:text-[#6B7280]">プライバシーポリシー</a>
          <a href="#" className="text-[12px] text-[#9CA3AF] hover:text-[#6B7280]">利用規約</a>
          <a href="/ja/unit-price" className="text-[12px] text-[#9CA3AF] hover:text-[#6B7280]">受託単価表</a>
        </div>
      </div>
    </footer>
  );
}
