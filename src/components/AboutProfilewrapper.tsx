import AboutMeCard from "./AboutMeCard";
import ProfileSection from "./ProfileSection";

export default function AboutProfileWrapper() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-black text-white px-6 py-12 gap-8">
      {/* LEFT SIDE → About */}
      <div className="w-full md:w-1/2 flex justify-start">
        <AboutMeCard />
      </div>

      {/* RIGHT SIDE → Profile */}
      <div className="w-full md:w-1/2 flex justify-center">
        <ProfileSection />
      </div>
    </section>
  );
}
