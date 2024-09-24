import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image src="/images/features/tomaMuestra.png" alt="feature1" width={50} height={50} />
    ),
    title: "Toma de Muestras",
    paragraph:
      "Identifica las sustancias químicas y mide sus concentraciones en la sangre o en otros líquidos orgánicos del cuerpo; también se perciben los niveles de fármacos terapéuticos o de drogas de abuso.",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/features/hematologia.png" alt="feature2" width={50} height={50} />
    ),
    title: "Hematología",
    paragraph:
      "Mide la cantidad de células sanguíneas y su morfología. Esta área también distingue la madurez e inmadurez que generan las enfermedades hematológicas, evalúa los tiempos de coagulación y los mecanismos que la alteran.",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/features/inmunologia.png" alt="feature3" width={50} height={50} />
    ),
    title: "Inmunología",
    paragraph:
      "Evalúa la presencia de anticuerpos ante componentes infecciosos o no infecciosos; evalúa el funcionamiento del sistema inmunológico, así como la presencia de enfermedades autoinmunes.",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/features/microbiologia.png" alt="feature4" width={50} height={50} />
    ),
    title: "Microbiología",
    paragraph:
      "Identifica microorganismos que permiten detectar la fuente de una infección.",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/features/bioquimica.png" alt="feature1" width={50} height={50} />
    ),
    title: "Bioquímica",
    paragraph:
    "Identifica las sustancias químicas y mide sus concentraciones en la sangre o en otros líquidos orgánicos del cuerpo; también se perciben los niveles de fármacos terapéuticos o de drogas de abuso.",
  },
  {
    id: 1,
    icon: (
      <Image src="/images/features/biologiaMolecular.png" alt="feature1" width={50} height={50} />
    ),
    title: "Biología Molecular",
    paragraph:
      "mediante técnicas moleculares, identifica microorganismos que pueden producir enfermedades infecciosas a través de la detección de material genético y sus variaciones.",
  },
];
export default featuresData;
