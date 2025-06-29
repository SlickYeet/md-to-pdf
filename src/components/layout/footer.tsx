import Link from "next/link"

import { APIStatusBadge } from "@/components/api-status-badge"
import { Credits } from "@/components/layout/credits"
import { siteConfig } from "@/config"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container mt-8 border-t py-4">
      <div className="text-muted-foreground flex flex-col items-center justify-between gap-y-4 text-center md:flex-row">
        <p>
          &copy; {currentYear}{" "}
          <Link
            href="/"
            className="hover:text-primary underline-offset-2 transition-colors hover:underline"
          >
            {siteConfig.appName}
          </Link>
          . All rights reserved.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <APIStatusBadge />
          <Credits />
        </div>
      </div>
    </footer>
  )
}
