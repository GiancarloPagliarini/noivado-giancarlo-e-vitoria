"use client";

export default function Home() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-yellow-50 to-yellow-200 px-1 sm:px-4">
      {/* Ornamental hearts background */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <span className="absolute top-2 left-2 animate-pulse text-2xl text-pink-300 opacity-30 sm:text-5xl">
          💗
        </span>
        <span className="absolute top-8 right-4 animate-bounce text-3xl text-yellow-200 opacity-20 sm:text-6xl">
          ✨
        </span>
        <span className="absolute bottom-2 left-1/4 text-xl text-pink-200 opacity-20 sm:text-4xl">
          💖
        </span>
        <span className="absolute right-1/3 bottom-4 text-2xl text-yellow-300 opacity-20 sm:text-5xl">
          💍
        </span>
      </div>
      <div className="relative z-10 flex w-full max-w-xs flex-col items-center rounded-xl border border-pink-100 bg-white/80 px-2 py-4 shadow-2xl backdrop-blur-md sm:max-w-lg sm:rounded-3xl sm:px-8 sm:py-10">
        <span className="mb-2 animate-bounce text-4xl drop-shadow-lg sm:mb-4 sm:text-7xl">
          💍
        </span>
        <h1 className="mb-2 text-center text-lg font-black tracking-tight text-pink-700 drop-shadow sm:mb-3 sm:text-3xl">
          Em construção
        </h1>
        <h2 className="mb-1 text-center text-base font-semibold text-pink-500 sm:mb-2 sm:text-xl">
          O grande dia de Giancarlo & Vitória está chegando!
        </h2>
        <p className="mb-3 max-w-xs text-center text-xs text-gray-700 sm:mb-6 sm:max-w-md sm:text-lg">
          Estamos preparando uma surpresa inesquecível para celebrar nosso
          casamento.
          <br />
          Volte em breve para descobrir todas as novidades e detalhes desse
          momento especial!
        </p>
        <div className="mt-1 flex gap-1 sm:mt-2 sm:gap-3">
          <span className="animate-pulse text-lg text-pink-400 sm:text-2xl">
            💗
          </span>
          <span className="animate-spin-slow text-lg text-yellow-400 sm:text-2xl">
            ✨
          </span>
          <span className="animate-pulse text-lg text-pink-400 sm:text-2xl">
            💗
          </span>
        </div>
        <div className="mt-3 text-center sm:mt-6">
          <span className="inline-block rounded-full bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700 shadow sm:px-4 sm:py-2 sm:text-base">
            Com carinho, Giancarlo & Vitória
          </span>
        </div>
      </div>
      <style jsx global>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
