<template>
  <Modal
    data-testid="nova-response-dynamic-modal"
    :show="true"
    role="alertdialog"
    size="sm"
  >
    <div
      class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      style="width: 460px"
    >
      <ModalHeader v-text="data.title"/>
      <ModalContent>
        <p
          v-if="data.message"
          class="text-80 px-8 my-8"
          v-html="data.message"
        />
      </ModalContent>
      <ModalFooter>
        <div class="ml-auto">
          <OutlineButton
            v-if="data.copy"
            @click.prevent="handleCopy(data.copy)"
            class="mr-3"
          >
            {{ data.buttonCopyText || 'Copy to clipboard' }}
          </OutlineButton>
          <DefaultButton
            @click.prevent="handleClose"
          >
            {{ data.buttonText || 'OK' }}
          </DefaultButton>
        </div>
      </ModalFooter>
    </div>
  </Modal>
</template>

<script>
import copy from 'copy-to-clipboard';

export default {
  name: 'ResponseDynamicModal',
  props: ['data'],
  methods: {
    handleClose() {
      this.$emit('close');
    },
    handleCopy(text) {
      if (copy(text, {})) {
        Nova.success(this.data.copiedMessage || 'Copied!');
      }
    },
  },
};
</script>
