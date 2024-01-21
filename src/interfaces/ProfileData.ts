export default interface ProfileData {
  _id?: string;
  title: string;
  description: string;
  phone: string;
  price: string;
  realState: string;
  constractionDate: Date;
  category: string;
  rules: string[];
  amenities: string[];
  location: string;
}
