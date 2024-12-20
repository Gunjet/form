
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export function SecondCard({ Next, Back, formData, handleInputChange }) {
  return (
    <div className="w-[480px] h-[655px] bg-white rounded-md flex justify-center relative">
      <div className="w-[416px] h-[465px] flex-col justify-center mt-8">
        <div className="w-[416px] h-[129px]">
          <img src="/logo.png" className="w-[60px] h-[60px]" />
          <p className="text-[26px] font-semibold">Join Us! 😎</p>
          <p className="text-[18px] text-[#8E8E8E]">Please provide all current information accurately.</p>
        </div>
        <div className="w-[416px] h-[308px] my-[25px] flex flex-col justify-between">
          <div className="w-[416px] h-[68px]">
            <p className="font-semibold my-[2px]">Email *</p>
            <input
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-[416px] h-[68px]">
            <p className="font-semibold my-[2px]">Phone number *</p>
            <input
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="w-[416px] h-[68px] my-[2px]">
            <p className="font-semibold">Password *</p>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
              placeholder="Enter your password"
            />
          </div>
          <div className="w-[416px] h-[68px]">
            <p className="font-semibold my-[2px]">Confirm password *</p>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
              placeholder="Enter your password again"
            />
          </div>
        </div>
      </div>
      <div className="w-[416px] h-[44px] absolute my-[580px] justify-between flex">
        <button
          onClick={Back}
          className="w-[128px] h-[44px] rounded-md text-black border-[1px] border-[#CBD5E1] flex justify-center gap-2 items-center"
        >
          <IoIosArrowBack className="w-[18px] h-[18px]" />
          Back
        </button>
        <button
          onClick={Next}
          className="w-[280px] h-[44px] bg-[#D6D8DB] rounded-md text-[#A9ACAF] flex justify-center gap-2 items-center"
        >
          Continue 2/3
          <IoIosArrowForward className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
}
