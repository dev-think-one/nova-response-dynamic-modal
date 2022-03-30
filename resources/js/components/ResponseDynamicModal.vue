<template>
  <modal
    tabindex="-1"
    role="dialog"
    :closes-via-backdrop="true"
    @modal-close="handleClose"
  >
    <div class="bg-white rounded-lg shadow-lg overflow-hidden w-action-fields">
      <heading
        :level="2"
        class="border-b border-40 py-8 px-8"
      >
        {{ data.title }}
      </heading>

      <p
        v-if="data.message"
        class="text-80 px-8 my-8"
        v-html="data.message"
      />
      <div class="bg-30 px-6 py-3 flex">
        <div class="flex items-center ml-auto">
          <button
            v-if="data.copy"
            type="button"
            class="btn btn-default btn-danger mr-2"
            @click.prevent="handleCopy(data.copy)"
          >
            {{ data.buttonCopyText || 'Copy to clipboard' }}
          </button>
          <button
            type="button"
            class="btn btn-default btn-primary"
            @click.prevent="handleClose"
          >
            {{ data.buttonText || 'OK' }}
          </button>
        </div>
      </div>
    </div>
  </modal>
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
