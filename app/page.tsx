import CarCard from "@components/CarCard";

export default function Home() {
  return (
    <main>
      <CarCard
        model='sedan'
        make='toyota'
        mpg={30}
        transmission='a'
        year={2022}
        drive='front'
      />
    </main>
  );
}
