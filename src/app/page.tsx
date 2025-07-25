import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anasayfa",
  description: "Anasayfa",
};

export default function Anasayfa() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Beyaz Eşya Servisi
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Beyaz Eşya Servis ve tamir hizmetimizle arızalarınızın hızlı bir
          şekilde çözülmesini sağlıyoruz Garantisi olmayan cihazlar için
          profesyonel bakım, onarım ve tamir hizmetleri. Hemen ara'ya tıklayarak
          bize ulaşıp randevu oluşturabilirsiniz,Veya Şimdi ara'ya tıklayarak
          müşteri hizmetlerimize bağlanabilirsiniz
        </p>
        <Link
          href="/teklif-al"
          className="bg-[#FFD700] hover:bg-[#FFC107] text-[#0A1D56] font-semibold px-6 py-3 rounded-lg inline-block text-base md:text-lg transition"
        >
          Hemen Randevu Al
        </Link>

        <a
          href="tel:+905065019612"
          className="bg-[#FFD700] hover:bg-[#FFC107] text-[#0A1D56] font-semibold px-6 py-3 rounded-lg inline-block text-base md:text-lg transition mt-4"
        >
          Şimdi Ara
        </a>
      </section>
        <p className="text-lg md:text-xl mb-6">
        Beyaz Eşya Servis Hizmetleri, evlerimizin vazgeçilmez parçaları olan
        beyaz eşyaların bakımı ve onarımı konusunda uzmanlaşmış bir alandır. Bu
        hizmetler, Beyaz Eşya Tamir Servisi aracılığıyla, arızalanan
        buzdolapları, çamaşır makineleri ve diğer ev aletlerine yönelik hızlı
        çözümler sunar. Aileler, günümüzde buzdolabı servisleri sayesinde gıda
        güvenliğini sağlamakta ve çamaşır makinesi onarımı ile iş yüklerini
        azaltmaktadır. Aynı zamanda, klima bakım ve montaj hizmetleri ile yaz
        aylarında serin bir ortam oluşturmak için gereken desteği alır.
      </p>
      <MusteriYorumlari />
    
    </main>
  );
}

function MusteriYorumlari() {
  const yorumlar = [
    {
      ad: "Ali Y.",
      yorum: "Çok hızlı ve güvenilir hizmet, memnun kaldım.",
      puan: 5,
    },
    {
      ad: "Zeynep K.",
      yorum: "Klimamı tamir ettirdim, fiyat uygundu.",
      puan: 4,
    },
    {
      ad: "Mustafa A.",
      yorum: "Buzdolabı tamiri beklediğimden uzun sürdü.",
      puan: 3,
    },
    { ad: "Ayşe M.", yorum: "Teknisyen çok bilgiliydi, teşekkürler.", puan: 5 },
    {
      ad: "Fatma D.",
      yorum: "Servis biraz geç geldi ama sorun çözüldü.",
      puan: 4,
    },
    { ad: "Emre S.", yorum: "Memnun kalmadım, tekrar arıza yaptı.", puan: 2 },
    { ad: "Canan H.", yorum: "Mükemmel hizmet!", puan: 5 },
    { ad: "Kerem C.", yorum: "Ortalama bir servis deneyimi yaşadım.", puan: 3 },
    {
      ad: "Selin T.",
      yorum: "Tavsiye ederim, işlerini iyi yapıyorlar.",
      puan: 5,
    },
    { ad: "Burak B.", yorum: "İletişim konusunda eksikleri var.", puan: 3 },
    { ad: "Cemre Z.", yorum: "Fiyat/performans açısından başarılı.", puan: 4 },
    { ad: "Tayfun E.", yorum: "Biraz pahalı ama kaliteli hizmet.", puan: 4 },
    { ad: "Gizem Ş.", yorum: "Sorunum hala devam ediyor.", puan: 2 },
    {
      ad: "Yusuf R.",
      yorum: "Çok memnun kaldım, tekrar tercih ederim.",
      puan: 5,
    },
    { ad: "Derya N.", yorum: "İşlerini titizlikle yaptılar.", puan: 5 },
    { ad: "Hakan U.", yorum: "Servis geç geldi.", puan: 2 },
    { ad: "Melis L.", yorum: "Her şey yolundaydı, teşekkürler.", puan: 5 },
    { ad: "Onur İ.", yorum: "Çözüm odaklı ekip, memnun kaldım.", puan: 4 },
  ];

  return (
    <section className="bg-white-200 text-gray-400 px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Müşteri Yorumları</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {yorumlar.map((item, index) => (
          <div
            key={index}
            className="bg-white text-[#0A1D56] p-4 rounded shadow"
          >
            <h3 className="font-semibold text-lg">{item.ad}</h3>
            <p className="italic mb-2">"{item.yorum}"</p>
            <div className="text-sm text-yellow-500">
              {"★".repeat(item.puan)}
              {"☆".repeat(5 - item.puan)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
