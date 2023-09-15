<template>
  <UiDivider class="col-span-3 -mx-4 !w-auto md:mx-0" />
  <AccountData
    class="col-span-3"
    :header="$t('account.accountSettings.personalData.yourName')"
    :button-text="$t('account.accountSettings.personalData.edit')"
    @on-click="openModal('yourName')"
  >
    {{ userData?.firstName }} {{ userData?.lastName }}
  </AccountData>
  <UiDivider class="col-span-3 -mx-4 !w-auto md:mx-0" />
  <AccountData
    class="col-span-3"
    :header="$t('account.accountSettings.personalData.contactInformation')"
    :button-text="$t('account.accountSettings.personalData.edit')"
    @on-click="openModal('contactInformation')"
  >
    {{ userData?.email }}
  </AccountData>
  <UiDivider class="col-span-3 -mx-4 !w-auto md:mx-0" />
  <AccountData
    class="col-span-3"
    :header="$t('account.accountSettings.personalData.yourPassword')"
    :button-text="$t('account.accountSettings.personalData.change')"
    @on-click="openModal('passwordChange')"
  >
    ******
  </AccountData>
  <UiDivider class="col-span-3 -mx-4 !w-auto md:mx-0" />
  <UiModal
    v-model="isOpen"
    ref="modalElement"
    tag="section"
    role="dialog"
    class="h-full w-full overflow-auto md:w-[600px] md:h-fit"
    aria-labelledby="address-modal-title"
  >
    <header>
      <SfButton square variant="tertiary" class="absolute right-2 top-2" @click="closeModal">
        <SfIconClose />
      </SfButton>
      <h3 id="address-modal-title" class="text-neutral-900 text-lg md:text-2xl font-bold mb-6">
        {{ $t(`account.accountSettings.personalData.${openedForm}`) }}
      </h3>
    </header>
    <AccountFormsName v-if="openedForm === 'yourName'" @on-save="closeModal" @on-cancel="closeModal" />
    <ContactInformationForm
      v-else-if="openedForm === 'contactInformation'"
      @on-save="closeModal"
      @on-cancel="closeModal"
    />
    <AccountFormsPassword v-else-if="openedForm === 'passwordChange'" @on-save="closeModal" @on-cancel="closeModal" />
  </UiModal>
</template>

<script setup lang="ts">
import { SfButton, SfIconClose, useDisclosure } from '@storefront-ui/vue';
import { unrefElement } from '@vueuse/core';

definePageMeta({
  layout: 'account',
});

const { isOpen, open, close } = useDisclosure();
const { fetchCustomer, data: userData } = useCustomer();

fetchCustomer();

const lastActiveElement = ref();
const modalElement = ref();
const openedForm = ref('');

const openModal = async (modalName: string) => {
  openedForm.value = modalName;
  lastActiveElement.value = document.activeElement;
  open();
  await nextTick();
  unrefElement(modalElement).focus();
};
const closeModal = () => {
  close();
  lastActiveElement.value.focus();
};
</script>
