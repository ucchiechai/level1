"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface MenuCardProps {
  name: string
  description: string
  imageSrc: string
  priceYen?: number
  isRecommended?: boolean
}

const yenFormatter = new Intl.NumberFormat("ja-JP")

export function MenuCard({
  name,
  description,
  imageSrc,
  priceYen,
  isRecommended,
}: MenuCardProps) {
  return (
    <div className="group relative bg-card backdrop-blur-md rounded-lg p-5 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.3)] cursor-pointer border border-border/30 menu-card-reveal">
      <div className="relative w-16 h-16 mb-4 rounded-md overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="font-serif text-2xl font-medium text-foreground mb-2 tracking-wide">
        {name}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
      {(priceYen != null || isRecommended) && (
        <div className="mt-4 flex items-center gap-2">
          {priceYen != null && (
            <span className="text-foreground font-medium">
              {yenFormatter.format(priceYen)}円
            </span>
          )}
          {isRecommended && (
            <Badge
              className="px-2 border-0 bg-orange-500 text-white shadow-sm hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600"
            >
              おすすめ
            </Badge>
          )}
        </div>
      )}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  )
}
