export interface QuantitySelectorProps {
  value: number;
  onChange?: (value: number) => void;
  minValue?: number;
  maxValue?: number;
}
