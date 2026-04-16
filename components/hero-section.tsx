import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-coffee.jpg"
          alt="宇宙を感じるコーヒーカップ"
          fill
          className="object-cover object-center hero-coffee-reveal"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Logo / Title */}
      <div className="relative z-10 text-center pt-12 pb-8">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-foreground/90 drop-shadow-lg">
          nebula coffee
        </h1>
      </div>

      {/* Spacer for the coffee image in background */}
      <div className="relative z-10 flex-1" />
    </section>
  )
}
