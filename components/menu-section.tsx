import { MenuCard } from "./menu-card"

const menuItems = [
  {
    name: "Orion Blend",
    description: "深煎りの力強いコクと、宇宙の静寂。",
    imageSrc: "/images/orion-blend.jpg",
    priceYen: 1200,
    isRecommended: true,
  },
  {
    name: "Andromeda Blend",
    description: "深煎りの力強いコクと、宇宙の静寂。",
    imageSrc: "/images/andromeda-blend.jpg",
  },
  {
    name: "Solar Decaf",
    description: "深煎りの力強いコクと、宇宙の静寂。",
    imageSrc: "/images/solar-decaf.jpg",
  },
]

export function MenuSection() {
  return (
    <section className="relative z-20 -mt-48 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <MenuCard
              key={item.name}
              name={item.name}
              description={item.description}
              imageSrc={item.imageSrc}
              priceYen={item.priceYen}
              isRecommended={item.isRecommended}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
