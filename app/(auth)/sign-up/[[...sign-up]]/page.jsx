import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 min-h-screen flex items-center justify-center ">
      <div className="lg:grid lg:grid-cols-12 shadow-xl overflow-hidden bg-white/30 backdrop-blur-lg">
        {/* Left Side - Image Section */}
        <section className="relative flex items-center justify-center lg:col-span-5 xl:col-span-6 bg-gray-900">
          <img
            alt="Speech Therapy"
            src="https://www.henryford.com/-/media/project/hfhs/henryford/henry-ford-blog/images/mobile-interior-banner-images/2019/03/speech-therapy.jpg?h=600&iar=0&w=640&hash=6724AD7065E499A84FE2A9BA7D10DF19"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="relative text-center p-8 text-white z-10">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl drop-shadow-lg">
              Welcome to EchoEase 💕❤️
            </h2>
            <p className="mt-4 text-lg sm:text-xl font-light leading-relaxed text-white/80">
              Find Your Voice, Speak with Confidence—Breaking Barriers, One Word at a Time. 🐼
            </p>
          </div>
        </section>

        {/* Right Side - Sign In Section */}
        <main className="flex items-center justify-center px-8 py-12 lg:col-span-7 xl:col-span-6">
          <div className="max-w-md w-full space-y-6 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 drop-shadow-md">
            Transforming Speech
            </h1>
            <p className="text-gray-600 text-lg">Start your journey to fluent and confident speech.</p>
            <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <SignUp />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}