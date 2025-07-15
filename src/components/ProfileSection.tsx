export default function ProfileSection() {
  return (
    <section className="min-h-screen flex items-center bg-black text-white px-6 py-12">
      <div className="hidden md:block w-1/2"></div>

      <div className="w-64 h-64 flex items-center justify-center ml-auto">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-white"
        />
      </div>
    </section>
  );
}
