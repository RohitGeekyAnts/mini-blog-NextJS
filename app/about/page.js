export default function AboutPage() {
  return (
    <section className="flex flex-col items-center text-center py-20 px-4">
      <img
        src="https://i.pravatar.cc/150"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-6"
      />
      <h1 className="text-2xl font-bold">Alex Thompson</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Passionate developer sharing insights about modern web development.
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Contact Me
      </button>
    </section>
  );
}
