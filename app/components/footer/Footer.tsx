import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground max-sm:text-center">
            © {new Date().getFullYear()} Portfolio. Built with Next.js &
            Tailwind CSS.
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="https://github.com"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://twitter.com"
              className="hover:text-primary transition-colors"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
