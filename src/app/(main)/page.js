import Reviews from "@/components/Reviews";
import Banner from "@/components/shared/Banner";
import BookCard from "@/components/shared/BookCard";
import BreakingNews from "@/components/shared/BreakingNews";
import TrendingAuthor from "@/components/TrendingAuthor";
export default function Home() {
  return (
    <>
     <Banner/>
        <BreakingNews />
        <BookCard />
        <TrendingAuthor />
        <Reviews />
    </>
      
  );
}
