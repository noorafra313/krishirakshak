import { VILLAGES, type Scan, type Severity } from "./data";

const STORAGE_KEY = "krishi-scans-v1";

const CROP_DISEASE: Array<[string, string]> = [
  ["Rice", "Rice Blast"],
  ["Rice", "Bacterial Leaf Blight"],
  ["Rice", "Brown Spot"],
  ["Sugarcane", "Red Rot"],
  ["Sugarcane", "Sugarcane Smut"],
  ["Tomato", "Late Blight"],
  ["Tomato", "Early Blight"],
  ["Tomato", "Leaf Curl Virus"],
  ["Cotton", "Bacterial Blight"],
  ["Wheat", "Yellow Rust"],
  ["Maize", "Fall Armyworm Damage"],
];

const FARMERS = [
  "Ramesh Gowda",
  "Lakshmamma B",
  "Suresh Kumar",
  "Manjunath H R",
  "Shivanna M",
  "Devaraju N",
  "Kavitha S",
  "Prakash Gowda",
  "Nagaraj K",
  "Basavaraju T",
  "Yashoda Bai",
  "Chandrashekar P",
];

const SEVERITIES: Severity[] = ["Low", "Medium", "High", "Critical"];

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

let seedCache: Scan[] | null = null;

function buildSeed(): Scan[] {
  if (seedCache) return seedCache;
  const now = Date.now();
  const scans: Scan[] = Array.from({ length: 56 }, (_, i) => {
    const v = pick(VILLAGES)!;
    const [crop, disease] = pick(CROP_DISEASE)!;
    return {
      id: `seed-${i}`,
      crop_type: crop,
      disease_name: disease,
      confidence: Math.round((82 + Math.random() * 16) * 10) / 10,
      severity: pick(SEVERITIES)!,
      latitude: v.lat + (Math.random() - 0.5) * 0.045,
      longitude: v.lng + (Math.random() - 0.5) * 0.045,
      village_name: v.village,
      farmer_name: pick(FARMERS)!,
      status: Math.random() < 0.28 ? "treated" : "active",
      created_at: new Date(now - Math.random() * 6 * 86400000).toISOString(),
    };
  });
  scans.sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at));
  seedCache = scans;
  return scans;
}

function readUserScans(): Scan[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Scan[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeUserScans(scans: Scan[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(scans.slice(0, 300)));
  } catch {
    // storage full or unavailable — keep in-memory only
  }
}

function newId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `local-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
}

export async function fetchScans(): Promise<Scan[]> {
  const merged = [...readUserScans(), ...buildSeed()];
  merged.sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at));
  return merged.slice(0, 300);
}

export type NewScan = Omit<Scan, "id" | "created_at">;

export async function insertScan(scan: NewScan): Promise<Scan> {
  const record: Scan = { ...scan, id: newId(), created_at: new Date().toISOString() };
  writeUserScans([record, ...readUserScans()]);
  return record;
}

export const scansQuery = {
  queryKey: ["scans"] as const,
  queryFn: fetchScans,
  refetchInterval: 15000,
};
