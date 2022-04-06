<template>
  <QuillEditor
    ref="quillEditor"
    v-model:content="content"
    :options="options"
    style="height: 350px;"
    class="quillEditor"
    content-type="html"
    @ready="readyQuill"
  />
</template>

<script lang="ts" setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { computed, reactive, ref } from 'vue';

const props = defineProps<{
  content: String
}>();

const emit = defineEmits(['update:content']);

const quillEditor = ref();
const content = computed<string>({
  get () {
    return props.content as string;
  },

  set (value) {
    emit('update:content', value);
  }
});

const options = reactive({
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction
      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
      ['image'],
      ['video'],
    ],
  },
  theme: 'snow',
  placeholder: '',
});
function readyQuill() {
  console.log('Quill准备好了');
}
// function getHtmlVal() {
//   return quillEditor.value.getHTML();
// }
</script>

<style lang="scss">
.ql-toolbar.ql-snow {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid var(--n-border-color);
  margin-top: -10px;
}

.ql-container.ql-snow {
  border: none;
  color: var(-n-text-color);
}

.ql-editor.ql-blank::before {
  color: var(--n-text-color);
}
</style>
