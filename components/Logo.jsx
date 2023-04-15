import Image from "next/image";
import Ilogo from "../images/logos/Car2autobuy-Preview-01.svg"
export function Logo(props) {
  return <Image src={Ilogo} alt="Car2autobuy" width={100} height={100} {...props} />;
}
