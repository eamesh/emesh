import { FormInst } from 'naive-ui';
import { ref } from 'vue';

export const useForm = () => {
  const formRef = ref<FormInst | null>(null);
  const loadingRef = ref(false);

  const formValidate = (errorCallback?: (error: any) => void): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      formRef.value?.validate((errors) => {
        if (errors) {
          console.log(errors);
          errorCallback && errorCallback(errors);
          reject(true);
          return;
        }

        resolve(false);
      });
    });
  };

  const formSubmit = async <T>(request: Promise<any>, errorCallback?: (error: any) => void): Promise<T | void> => {
    if (await formValidate(errorCallback)) return;

    return new Promise(async (resolve, reject) => {
      loadingRef.value = true;
      try {
        const response = await request;
        resolve(response);
      } catch (error) {
        reject(error);
      }
      loadingRef.value = false;
    });
  };

  return {
    formRef,
    formValidate,
    formSubmit,
    loadingRef
  };
};
