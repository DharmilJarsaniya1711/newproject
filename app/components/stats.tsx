
export default function Stats() {

    return (
        <div className="bg-[#293754]">
        <div className="flex sm:flex-row flex-col gap-10 items-center sm:items-start sm:justify-around w-full md:w-10/12 py-16 md:mx-auto">
          <div className="flex flex-col w-3/4 sm:w-1/4 text-center gap-3 sm:gap-5 text-white">
            <span className="text-4xl sm:text-5xl">15+</span>
            <span>Medical specialties</span>
          </div>
          <div className="flex flex-col w-3/4 sm:w-1/4 text-center gap-3 sm:gap-5 text-white">
            <span className="text-4xl sm:text-5xl">06</span>
            <span>
              Available across the MENA region in six countries: Bahrain, UAE,
              Qatar, KSA, Oman and Kuwait.
            </span>
          </div>
          <div className="flex flex-col w-3/4 sm:w-1/4 text-center gap-3 sm:gap-5 text-white">
            <span className="text-4xl sm:text-5xl">5x</span>
            <span>Faster and more efficient diagnosis for the patients</span>
          </div>
        </div>
      </div>
    )
}