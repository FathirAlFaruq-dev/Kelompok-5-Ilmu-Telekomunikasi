import { 
  Search, 
  Map, 
  Server, 
  HardHat, 
  Settings, 
  Activity, 
  MonitorCheck, 
  TrendingUp 
} from 'lucide-react';
import { StepDetail } from './types';

export const STEPS: StepDetail[] = [
  {
    id: 1,
    title: "Analisis Kebutuhan",
    description: "Langkah awal menentukan pondasi jaringan.",
    points: [
      "Menentukan tujuan jaringan (internet, telepon, IoT, dll).",
      "Mengidentifikasi area cakupan dan jumlah pengguna.",
      "Mengukur kebutuhan bandwidth dan kapasitas trafik."
    ],
    icon: Search
  },
  {
    id: 2,
    title: "Perencanaan Infrastruktur",
    description: "Desain strategis topologi dan lokasi.",
    points: [
      "Memilih teknologi (fiber optik, wireless, satelit, BTS).",
      "Menentukan lokasi perangkat (menara, router, server).",
      "Mendesain topologi jaringan (star, ring, mesh)."
    ],
    icon: Map
  },
  {
    id: 3,
    title: "Pemilihan Perangkat & Teknologi",
    description: "Seleksi hardware yang tepat sasaran.",
    points: [
      "Antena, kabel serat optik, BTS, perangkat microwave.",
      "Router, switch, core network.",
      "Sistem pendukung: power supply, UPS, pendingin."
    ],
    icon: Server
  },
  {
    id: 4,
    title: "Pembangunan Fisik",
    description: "Eksekusi instalasi di lapangan.",
    points: [
      "Pemasangan tiang/menara telekomunikasi.",
      "Penarikan kabel fiber optik.",
      "Pemasangan perangkat radio & antena."
    ],
    icon: HardHat
  },
  {
    id: 5,
    title: "Konfigurasi Jaringan",
    description: "Setup logis agar sistem terhubung.",
    points: [
      "Pengaturan frekuensi & bandwidth.",
      "Routing, switching, dan manajemen trafik.",
      "Pengaturan keamanan jaringan (firewall, enkripsi)."
    ],
    icon: Settings
  },
  {
    id: 6,
    title: "Pengujian Jaringan (Testing)",
    description: "Validasi performa sebelum live.",
    points: [
      "Pengukuran kekuatan sinyal.",
      "Uji latency, throughput, dan kualitas layanan (QoS).",
      "Troubleshooting jika ada masalah."
    ],
    icon: Activity
  },
  {
    id: 7,
    title: "Operasional & Pemeliharaan",
    description: "Menjaga stabilitas jangka panjang.",
    points: [
      "Monitoring jaringan real-time.",
      "Perawatan rutin perangkat.",
      "Pembaruan perangkat lunak & sistem keamanan."
    ],
    icon: MonitorCheck
  },
  {
    id: 8,
    title: "Evaluasi & Optimasi",
    description: "Peningkatan berkelanjutan.",
    points: [
      "Analisis performa jaringan.",
      "Penambahan kapasitas jika diperlukan.",
      "Optimalisasi lokasi perangkat dan konfigurasi."
    ],
    icon: TrendingUp
  }
];