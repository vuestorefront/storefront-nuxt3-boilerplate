import type { ConcreteComponent } from 'vue';

export interface ModalProps {
  modelValue?: boolean;
  tag?: string | ConcreteComponent;
  disableClickAway?: boolean;
  disableEsc?: boolean;
}
