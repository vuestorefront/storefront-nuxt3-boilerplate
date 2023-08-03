<template>
  <UiDivider class="w-screen -mx-4 md:col-span-3 md:w-auto md:mx-0" />
  <AccountData
    class="col-span-3"
    :header="$t('account.accountSettings.personalData.yourName')"
    :button-text="$t('account.accountSettings.personalData.edit')"
    @on-click="openModal('yourName')"
  >
    {{ userData.firstName }} {{ userData.lastName }}
  </AccountData>
  <UiDivider class="w-screen -mx-4 md:col-span-3 md:w-auto md:mx-0" />
  <AccountData
    class="col-span-3"
    :header="$t('account.accountSettings.personalData.contactInformation')"
    :button-text="$t('account.accountSettings.personalData.edit')"
    @on-click="openModal('contactInformation')"
  >
    {{ userData.email }}
  </AccountData>
  <UiDivider class="w-screen -mx-4 md:col-span-3 md:w-auto md:mx-0" />
  <AccountData
    class="col-span-3"
    :header="$t('account.accountSettings.personalData.yourPassword')"
    :button-text="$t('account.accountSettings.personalData.change')"
    @on-click="openModal('passwordChange')"
  >
    ******
  </AccountData>
  <UiDivider class="w-screen -mx-4 md:col-span-3 md:w-auto md:mx-0" />
  <UiOverlay v-if="isOpen" :visible="isOpen">
    <SfModal
      v-model="isOpen"
      as="section"
      role="dialog"
      class="h-full w-full overflow-auto md:w-[600px] md:h-fit"
      aria-labelledby="address-modal-title"
    >
      <header>
        <SfButton type="button" square variant="tertiary" class="absolute right-2 top-2" @click="close">
          <SfIconClose />
        </SfButton>
        <h3 id="address-modal-title" class="text-neutral-900 text-lg md:text-2xl font-bold mb-6">
          {{ $t(`account.accountSettings.personalData.${openedForm}`) }}
        </h3>
      </header>
      <AccountFormsName v-if="openedForm === 'yourName'" @on-save="close" @on-cancel="close" />
      <ContactInformationForm v-else-if="openedForm === 'contactInformation'" @on-save="close" @on-cancel="close" />
      <AccountFormsPassword v-else-if="openedForm === 'passwordChange'" @on-save="close" @on-cancel="close" />
    </SfModal>
  </UiOverlay>
</template>

<script setup lang="ts">
import { SfButton, SfIconClose, SfModal, useDisclosure } from '@storefront-ui/vue';

definePageMeta({
  layout: 'account',
});
const { isOpen, open, close } = useDisclosure();

const openedForm = ref('');
const openModal = (modalName: string) => {
  openedForm.value = modalName;
  open();
};

const userData = ref({
  firstName: 'Hieronim',
  lastName: 'Anonim',
  email: 'hieronim.anonim@gmail.com',
});
</script>
