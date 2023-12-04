import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Домой</Link>
        <Link href="/reviews">Отзывы</Link>
      </nav>
    </header>
  
  );
}
 
export default Header;