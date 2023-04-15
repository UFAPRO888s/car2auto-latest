import { Footer } from "@/components/Footer";
import { PageSEO } from "@/components/SEO";
import Car_Recommendations_grid from "@/components/Car_Recommendations_grid";
import { Container } from "@/components/Container";
import { HeroWhiteBuyCar } from "@/components/HeroWhiteBuyCar";
import siteMetadata from "@/data/siteMetadata";

export default function BuyCars({ DataCar, textRxSx, contexzt }) {
  // console.log(DataCar)
  return (
    <>
      <PageSEO
        title={
          "ซื้อรถมือสอง " + siteMetadata.title + " | " + siteMetadata.author
        }
        description={"ซื้อรถมือสอง " + siteMetadata.description}
      />
      <main>
        <Container>
          <Car_Recommendations_grid />
          <HeroWhiteBuyCar
            DataCars={DataCar}
            textDis={textRxSx}
            ConTex={contexzt}
          />
        </Container>
      </main>
      <Footer />
    </>
  );
}
export async function getServerSideProps(context) {
  const { make, min, max } = context.query;
  const res = await fetch(
    `https://car2auto-2023-default-rtdb.asia-southeast1.firebasedatabase.app/dataCar.json`
  );
  const data = await res.json();
  // console.log(data)
  let result = data;
  let textRx = "ไม่พบรถยนต์ยี่ห้อ" + make;
  let conx = "ไม่พบการค้นหา";
  if (make||max) {
    result = data.filter(
      (carx) => (carx.make == make) || (carx.price >= min) && (carx.price <= max)
    );
    textRx = "รถยนต์ " + make + " จำนวน " + result.length + " คัน";
    conx = "ตามเงื่อนไข ยี่ห้อ " + make;
    if(!make){
      textRx = "รถยนต์ ค้นหาด้วยราคา ตั้งแต่ " + min + " ถึง " + max +" จำนวน "+result.length + " คัน";
      conx = "";
    }
    
  } else {
    result = data;
    textRx = "รถยนต์ทั้งหมด จำนวน " + result.length + " คัน";
    conx = "";
  }
  return {
    props: { DataCar: result, textRxSx: textRx, contexzt: conx },
  };
}
