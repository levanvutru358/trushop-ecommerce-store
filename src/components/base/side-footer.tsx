export function SiteFooter() {
  return (
    <footer className="border-grid border-t py-6 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href={'#'}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Le Van Vu Tru
            </a>
            . The source code is available on{" "}
            <a
              href={'https://github.com/levanvutru358/trushop-ecommerce-store'}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  )
}